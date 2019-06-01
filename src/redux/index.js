/**
 * Created by luis_arboleda17 on 05/20/18.
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducers from './reducers';

export default createStore(
  rootReducers,
  applyMiddleware(thunk),
);
