import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/index.scss'


const consoleError = console.error;

console.error = (message, ...args) => {
  if (message.includes('findDOMNode is deprecated')){
    return;
  }
  consoleError(message, ...args);
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />  
)