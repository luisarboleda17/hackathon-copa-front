/**
 * Created by luis_arboleda17 on 01/06/19.
 */

import axios from 'axios';
import url from './url';

import flights from '../assets/flights';

/**
 * Get current flights
 * @returns {Promise<AxiosResponse<T>>}
 */
// export const getFlights = () => axios.get(`${url}/`);
export const getFlights = () => new Promise(
  (resolve, reject) => {
    const keys = Object.keys(flights);
    const mappedFlights = keys.map(key => {
      const flight = flights[key];
      return flight;
    });
    resolve({
      data: {
        data: mappedFlights
      }
    });
  }
);
