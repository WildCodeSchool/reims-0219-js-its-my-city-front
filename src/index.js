import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import poisReducer from './reducers/poisReducer';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  pois: poisReducer,
  form: formReducer.plugin({
    poiCreation: (state, action) => {
      switch
      (action.type) {
        case 'NEXT_PAGE':
          if (action.labelKey) {
            return {
              ...state,
              values: {
                ...state.values,
                poiDesc: action.labelKey,
              },
            };
          }
          return state;
        case 'GET_INPUT':
          if (action.labelKey) {
            return {
              ...state,
              values: {
                ...state.values,
                poiDesc: action.labelKey,
              },
            };
          }
          return state;
        default:
          return state;
      }
    },
  }),
});

const store = createStore(rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
