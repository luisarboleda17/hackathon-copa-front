/**
 * Created by luis_arboleda17 on 01/06/19.
 */

import {
  LOAD_FLIGHTS,
  LOADING,
    PREDICT_MULTIPLE
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
      case PREDICT_MULTIPLE:
        return {...state, flights: state.flights.map(iterFlight => {
          const flight = action.payload.find(fl => fl.id === iterFlight['FLIGHT_NUMBER']);
          if (flight) {
              iterFlight.prediction = flight.prediction;
          }
          return iterFlight;
            })};
    default:
      return state;
  }
};
