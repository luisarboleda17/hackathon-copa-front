/**
 * Created by luis_arboleda17 on 01/06/19.
 */

import axios from 'axios';
import url from './url';

/**
 * Get prediction for flight
 * @param data
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getNoShowPredictionForFlight = data => axios.post(`${url}/predict`, data);
/*export const getNoShowPredictionForFlight = data => new Promise(
  (resolve, reject) => {
    const apiTimeout = setTimeout(
      () => {
        clearTimeout(apiTimeout);
        // TODO: Add data
        resolve(null);
      },
      2500
    );
  }
);
*/