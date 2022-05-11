import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SearchProvider } from './context/SearchContext';
import { GifsProvider } from './context/GifsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchProvider>
      <GifsProvider>
        <App />
      </GifsProvider>
    </SearchProvider>
  </React.StrictMode>
);

