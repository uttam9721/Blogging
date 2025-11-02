import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css'

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
     domain="dev-3papgz30cvfp13f0.us.auth0.com"
    clientId="khX8bs3BZ5qM1o8aaIFwyoXyXwp2oWrx"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
);
