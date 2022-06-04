// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAQPXz4ekYbYvyxYkky-z9Y7WjyiTVxSro',
  authDomain: 'buyshoes-5b954.firebaseapp.com',
  projectId: 'buyshoes-5b954',
  storageBucket: 'buyshoes-5b954.appspot.com',
  messagingSenderId: '1098748256471',
  appId: '1:1098748256471:web:ffe6e467338b8cf8105092',
  measurementId: 'G-8V5RFQHJ1E',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Authentication = getAuth(app);
export const Database = getDatabase(app);
