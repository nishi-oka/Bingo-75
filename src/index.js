import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Decoration from "./Decoration";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <Decoration />
    <App />
    </div>
  </React.StrictMode>
);

