import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, RouterProvider } from 'react-router-dom';
import './input.css';
import router from './router';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    
      <RouterProvider router={router} />
    
  
);