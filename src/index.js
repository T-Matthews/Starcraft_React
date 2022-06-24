import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ProviderLayer from './ProviderLayer';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyBrmu1-u_ZjvL8r53PttJuQ1rA-1Zi1ulI",
  authDomain: "starcraftii-9a358.firebaseapp.com",
  projectId: "starcraftii-9a358",
  databaseURL: "https://starcraftii-9a358-default-rtdb.firebaseio.com",
  storageBucket: "starcraftii-9a358.appspot.com",
  messagingSenderId: "147290400923",
  appId: "1:147290400923:web:5acdaa0ed709905003be3e"
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <ProviderLayer />
      </BrowserRouter>
    </FirebaseAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
