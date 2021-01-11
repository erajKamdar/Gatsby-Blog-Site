import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAvBWxSvRkU2EgesqMNLFId1uHelwAgjX4",
    authDomain: "gatsby-4f926.firebaseapp.com",
    databaseURL: "https://gatsby-4f926-default-rtdb.firebaseio.com",
    projectId: "gatsby-4f926",
    storageBucket: "gatsby-4f926.appspot.com",
    messagingSenderId: "1049984709478",
    appId: "1:1049984709478:web:e0e9f3520a2303f4654ea7",
    measurementId: "G-MKRKWPCD2E"
};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const firebaseDb = firebase.database