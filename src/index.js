import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import "../src/css/utils.css";
import {createStore, applyMiddleware} from "redux";
import BaseReducer from "../src/Reducers/BaseReducer";
import thunk from "redux-thunk";
import logger from 'redux-logger'


let store = createStore(BaseReducer, applyMiddleware(thunk, logger));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
