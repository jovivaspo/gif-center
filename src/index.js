import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SearchProvider } from './context/SearchContext';
import { LoadingProvider } from './context/LoadingContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchProvider>
      <LoadingProvider>
      <App />
      </LoadingProvider>
    </SearchProvider>
  </React.StrictMode>
);

