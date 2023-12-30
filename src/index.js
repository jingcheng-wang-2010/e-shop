import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bulma/css/bulma.css"

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

//Terminal input, before npm start
//Set-ExecutionPolicy -Scope Process Bypass
//./node_modules/.bin/json-server-auth ./backend/db.json --port 3001

//Access level 1
//regular@example.com
//password

//Access level 0
//admin@example.com
//password
