/**
 * Created by luis_arboleda17 on 01/06/19.
 */

import {
  LOAD_FLIGHT,
  LOADING,
  OPEN_FLIGHT_VIEW,
  CLOSE_FLIGHT_VIEW,
} from '../actions/flight-info';

import { PREDICT } from '../actions/flight-info';

const initialState = {
  flight: null,
  loading: false,
  open: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FLIGHT:
      return { ...state, ...{ flight: action.payload } };
    case LOADING:
      return { ...state, ...{ loading: action.payload } };
    case OPEN_FLIGHT_VIEW:
      return {...state, ...{ open: true }};
    case CLOSE_FLIGHT_VIEW:
      return {...state, ...{ open: false }};
    case PREDICT:
      return {...state, ...{ flight: { ...state.flight, predict: action.payload.prediction } }};
    default:
      return state;
  }
};
