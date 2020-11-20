import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import useBeforeMount from "./hooks/useBeforeMount";
import firebase from "./firebase";
import LoadingContainer from "./components/Loading";

import "nprogress/nprogress.css";
import nprogress from "nprogress";

const Home = lazy(() => import(/* webpackChunkName: "Home Page" */ "./pages"));
const Login = lazy(() =>
  import(/* webpackChunkName: "LoginPage" */ "./pages/login")
);
const NotFound = lazy(() =>
  import(/* webpackChunkName: "NotFoundPage" */ "./pages/notfound")
);
const NotAuthorized = lazy(() =>
  import(/* webpackChunkName: "Not Authorized" */ "./pages/notAuthorized")
);
const Admin = lazy(() =>
  import(/* webpackChunkName: "Admin Panel" */ "./pages/admin")
);
const Blog = lazy(() => import(/* webpackChunkName: "Blog" */ "./pages/blog"));
const Blogs = lazy(() =>
  import(/* webpackChunkName: "Blogs" */ "./pages/blogs")
);
const AllBlogs = lazy(() =>
  import(/* webpackChunkName: "All Blogs" */ "./pages/AllBlogs")
);

const HomePage = () => (
  <Suspense fallback={<LoadingContainer />}>
    <Home />
  </Suspense>
);

const LoginPage = () => (
  <Suspense fallback={<LoadingContainer />}>
    <Login />
  </Suspense>
);

const NotFoundPage = () => (
  <Suspense fallback={<LoadingContainer />}>
    <NotFound />
  </Suspense>
);

const NotAuthorizedPage = () => (
  <Suspense fallback={<LoadingContainer />}>
    <NotAuthorized />
  </Suspense>
);

const AdminPage = () => (
  <Suspense fallback={<LoadingContainer />}>
    <Admin />
  </Suspense>
);

const BlogPage = () => (
  <Suspense fallback={<LoadingContainer />}>
    <Blog />
  </Suspense>
);

const BlogsPage = () => (
  <Suspense fallback={<LoadingContainer />}>
    <Blogs />
  </Suspense>
);

const AllBlogsPage = () => (
  <Suspense fallback={<LoadingContainer />}>
    <AllBlogs />
  </Suspense>
);

const App = () => {
  useBeforeMount(() => {
    nprogress.start();
  });

  useEffect(() => {
    nprogress.done();
  }, []);

  useEffect(() => {
    firebase
      .messaging()
      .requestPermission()
      .then(async function() {
        const token = await firebase.messaging().getToken();

        console.log(token);
      })
      .catch(function(err) {
        console.log("Unable to get permission to notify.", err);
      });
    navigator.serviceWorker.addEventListener("message", message =>
      console.log(message, "asd")
    );
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/not-authorized" component={NotAuthorizedPage} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/blog/:id" component={BlogPage} />
        <Route exact path="/blogs" component={BlogsPage} />
        <Route exact path="/allblogs" component={AllBlogsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
