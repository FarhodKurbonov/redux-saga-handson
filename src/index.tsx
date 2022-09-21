import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { rootReducer } from './store/reducers';
import {userPostsFetchRequestedWatcherSaga} from './store/sagaActionChannel'
import {rootSaga} from "./store/saga";
import {loginFlowSaga} from './store/sagasLoginFlow';

const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
));


sagaMiddleware.run(loginFlowSaga)
// sagaMiddleware.run(rootSaga)


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
