import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import {
  FIREBASE_APIKEY,
  FIREBASE_AUTH_KEY,
  FIREBASE_PROJECTID_KEY,
  FIREBASE_STORAGE_BUCKET_KEY,
  FIREBASE_MESSAGE_SENDER_ID_KEY,
  FIREBASE_APP_ID_KEY,
  FIREBASE_MESSUREMENT_ID_KEY,
} from "../utils//apikeys.js";

const firebaseConfig = {
  apiKey: FIREBASE_APIKEY,
  authDomain: FIREBASE_AUTH_KEY,
  projectId: FIREBASE_PROJECTID_KEY,
  storageBucket: FIREBASE_STORAGE_BUCKET_KEY,
  messagingSenderId: FIREBASE_MESSAGE_SENDER_ID_KEY,
  appId: FIREBASE_APP_ID_KEY,
  measurementId: FIREBASE_MESSUREMENT_ID_KEY,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
