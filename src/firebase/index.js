import * as firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import "firebase/messaging";

import { FIREBASE_CONFIG } from "./config";

const { NODE_ENV, REACT_APP_VPN_KEY } = process.env;

export const initializeFirebase = () => {
  firebase.initializeApp(FIREBASE_CONFIG);

  if (NODE_ENV === "development" || NODE_ENV === "production") {
    firebase.analytics();
  }

  if (firebase.messaging.isSupported()) {
    const messaging = firebase.messaging();
    messaging.usePublicVapidKey(REACT_APP_VPN_KEY);
  }
};

export default firebase;
