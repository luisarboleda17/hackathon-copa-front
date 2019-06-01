/**
 * Created by luis_arboleda17 on 05/20/18.
 */

import { combineReducers } from 'redux';

import flights from './flights';
import predictions from './predictions';

export default combineReducers({
  flights,
  predictions,
});
