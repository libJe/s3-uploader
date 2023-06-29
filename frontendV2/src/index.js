import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from "aws-amplify";

const myAppConfig = {
  aws_appsync_graphqlEndpoint:
    "https://qrq62r5ymrg6tnhevitqs446b4.appsync-api.ap-southeast-1.amazonaws.com/graphql",
  aws_appsync_region: "ap-southeast-1",
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
  aws_cognito_region: "ap-southeast-1", // (required) - Region where Amazon Cognito project was created
  aws_user_pools_id: "ap-southeast-1_L7GKrPfG7", // (optional) -  Amazon Cognito User Pool ID
  aws_user_pools_web_client_id: "40a6v9j06gsku13b4ukn6mqhn9", // (optional) - Amazon Cognito App Client ID (App client secret needs to be disabled)
};

Amplify.configure(myAppConfig);

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
