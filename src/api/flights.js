/**
 * Created by luis_arboleda17 on 01/06/19.
 */

import axios from 'axios';
import url from './url';

/**
 * Get current flights
 * @returns {Promise<AxiosResponse<T>>}
 */
// export const getFlights = () => axios.get(`${url}/`);
export const getFlights = () => new Promise(
  (resolve, reject) => {
    const apiTimeout = setTimeout(
      () => {
        clearTimeout(apiTimeout);
        // TODO: Add data
        resolve([]);
      },
      2500
    );
  }
);
