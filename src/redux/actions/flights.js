/**
 * Created by luis_arboleda17 on 05/20/18.
 */

import API from '../../api';
import {loadPrediction, PREDICT} from "./flight-info";

/**
 * Action types
 */

export const LOAD_FLIGHTS = 'LOAD_FLIGHTS';
export const PREDICT_MULTIPLE = 'PREDICT_MULTIPLE';
export const LOADING = 'LOADING';

/**
 * Actions
 */


/**
 * Load flights to store
 * @param flights
 * @returns {{type: string, payload: *}}
 */
export const loadFlights = flights => ({
  type: LOAD_FLIGHTS,
  payload: flights,
});

/**
 * Set loading in store
 * @param loading
 * @returns {{type: string, payload: *}}
 */
export const setLoading = loading => ({
  type: LOADING,
  payload: loading,
});

export const loadPredictions = data => ({
    type: PREDICT_MULTIPLE,
    payload: data,
});

/**
 * Get flights from server
 * @returns {function(*): (Q.Promise<any> | Promise<T | never>)}
 */
export const requestFlights = () => (
  function (dispatch) {
    dispatch(setLoading(true));
    return API.flights.getFlights()
      .then(({ data }) => {
        dispatch(setLoading(false));
        return dispatch(loadFlights(data.data));
      })
      .catch((error) => {
        throw (error);
      });
  }
);

export const requestPredictions = (data) => (
    function (dispatch) {
        Promise.all(
            data.map(flight => API.predictions.getNoShowPredictionForFlight(flight)),
        )
            .then((values) => {
                const data = values.map(flight => flight.data.data);
                console.log(data);
                return dispatch(loadPredictions(data));
            })
            .catch((error) => {
                throw (error);
            });
    }
);

