// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDJHavMzjsZgdg02cxKVue3dIdkmmSfWow',
  authDomain: 'greenish-bazaar.firebaseapp.com',
  projectId: 'greenish-bazaar',
  storageBucket: 'greenish-bazaar.appspot.com',
  messagingSenderId: '881840462040',
  appId: '1:881840462040:web:8e7459c6c795b582bb5fad',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
