import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firebase-analytics'

const firebaseConfig = {
    apiKey: "AIzaSyB-N45tCK1KkMdrz9WpJ_v2GSAt_3-YQLI",
    authDomain: "a-land-for-all.firebaseapp.com",
    projectId: "a-land-for-all",
    storageBucket: "a-land-for-all.appspot.com",
    messagingSenderId: "857650617986",
    appId: "1:857650617986:web:9db367a4d9f13248f09e9b",
    measurementId: "G-R9S8LLXK85"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();