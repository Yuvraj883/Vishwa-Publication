import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, RouterProvider } from 'react-router-dom';
import './input.css';
import Routers from './router';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
      <RouterProvider router={Routers} />
    </React.StrictMode>
  
);
