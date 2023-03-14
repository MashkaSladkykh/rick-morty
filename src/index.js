import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import {Auth} from './auth';
import reportWebVitals from './reportWebVitals';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="773914815143-mlr5eo10nimtjckqbpn91pj0iahp056u.apps.googleusercontent.com">
    <BrowserRouter>
      <Auth/>
    </BrowserRouter>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
