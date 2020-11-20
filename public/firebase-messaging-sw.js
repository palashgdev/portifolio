importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyBjOPSXYpyRF3dssQm5a_gUH2-Y-VUscng",
  authDomain: "palashg7563-blog-d9d54.firebaseapp.com",
  databaseURL: "https://palashg7563-blog-d9d54.firebaseio.com",
  projectId: "palashg7563-blog-d9d54",
  storageBucket: "palashg7563-blog-d9d54.appspot.com",
  messagingSenderId: "1081992001927",
  appId: "1:1081992001927:web:c1db2b4402651084",
  measurementId: "G-BPN9QV9J7X"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("my notification title");
    });
  return promiseChain;
});
self.addEventListener("notificationclick", function(event) {
  console.log(event);
});
