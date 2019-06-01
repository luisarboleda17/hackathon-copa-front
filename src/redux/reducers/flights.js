/**
 * Created by luis_arboleda17 on 01/06/19.
 */

import {
  LOAD_FLIGHTS,
  LOADING
} from '../actions/flights';

const initialState = {
  flights: [],
  total: 0,
  loading: false,
  filter: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FLIGHTS:
      return { ...state, ...{ flights: action.payload } };
    case LOADING:
      return { ...state, ...{ loading: action.payload } };
    default:
      return state;
  }
};
