import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './components/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='ind'>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </div>
  
);

