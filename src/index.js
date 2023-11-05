import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from "./components/context/ThemeContext";
import FormContextProvider from "./components/context/FormContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <FormContextProvider>
      <ThemeContextProvider>
    <App />
      </ThemeContextProvider>
      </FormContextProvider>
  </React.StrictMode>
);

reportWebVitals();
