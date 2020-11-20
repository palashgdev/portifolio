import React from "react";

import { initializeFirebase } from "../src/firebase";
import AppRoutes from "./AppRoutes";
import GlobalStyles from "./Theme/GlobalStyle";

initializeFirebase();

const App = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./firebase-messaging-sw.js")
      .then(function(registration) {
        console.log("Registration successful, scope is:", registration.scope);
      })
      .catch(function(err) {
        console.log("Service worker registration failed, error:", err);
      });
  }

  return (
    <>
      <React.StrictMode>
        <AppRoutes />
        <GlobalStyles />
      </React.StrictMode>
    </>
  );
};

export default App;
