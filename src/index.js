import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import { Provider } from 'react-redux';
import store from './redux/store.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
import { BrowserRouter } from 'react-router-dom';
root.render(
  <Provider store={store}>
    <GlobalStyles>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStyles>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
