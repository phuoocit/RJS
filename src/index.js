import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { SearchProvider } from './pages/SearchContext';
import { DishProvider } from './pages/DishContext';
import { StateProvider } from './context/StateContext';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <StateProvider>
      <SearchProvider>
        <DishProvider>
          <App />
        </DishProvider>
      </SearchProvider>
    </StateProvider>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
