/**
 * Created by luis_arboleda17 on 05/20/18.
 */

import API from '../../api';

/**
 * Action types
 */

export const LOAD_FLIGHT = 'LOAD_FLIGHT';
export const LOADING = 'LOADING';
export const OPEN_FLIGHT_VIEW = 'OPEN_FLIGHT_VIEW';
export const CLOSE_FLIGHT_VIEW = 'CLOSE_FLIGHT_VIEW';

/**
 * Actions
 */

/**
 * Load flight to store
 * @param flight
 * @returns {{type: string, payload: *}}
 */
export const loadFlight = flight => ({
  type: LOAD_FLIGHT,
  payload: flight,
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

/**
 * Open flight view
 * @returns {{type: string}}
 */
export const openFlightView = () => ({
  type: OPEN_FLIGHT_VIEW,
});

/**
 * Close flight view
 * @returns {{type: string}}
 */
export const closeFlightView = () => {
  console.log('Closing');
  return {
    type: CLOSE_FLIGHT_VIEW,
  };
};

/**
 * Get flight info from server
 * @returns {function(*): (Q.Promise<any> | Promise<T | never>)}
 */
export const requestFlight = () => (
  function (dispatch) {
    dispatch(setLoading(true));
    return API.flights.getFlights()
      .then(({ data }) => {
        dispatch(setLoading(false));
        return dispatch(loadFlight(data.data));
      })
      .catch((error) => {
        throw (error);
      });
  }
);
