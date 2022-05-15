import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './theme/colors.css'
import './theme/fonts.css'
import './theme/sizes.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import firebase from 'firebase';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyD1oBDDtW8s4cClwcedg0VRcd0KmEalYUQ",
  authDomain: "getwell-info442-gteam.firebaseapp.com",
  projectId: "getwell-info442-gteam",
  storageBucket: "getwell-info442-gteam.appspot.com",
  messagingSenderId: "1035607993662",
  appId: "1:1035607993662:web:1092a9ecb8500ff0f0d06f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
