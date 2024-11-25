import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import employeeReducer from './store/employee/employeeReducer'
import { applyMiddleware,compose,createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import { thunk } from 'redux-thunk';
const middlewares = [thunk];
const rootReducer = combineReducers({
  employeeReducer
});
const store = createStore(rootReducer,compose(applyMiddleware(...middlewares)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <App />
     </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
