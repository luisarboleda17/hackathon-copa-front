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
        resolve({
          data: {
            data: [
              {
                id: 15,
                date: '04/30/2019',
                hour: '3:58:00 p. m.',
                from: {
                  city: 'PTY',
                  airport: 'TOCUMEN INTERNATIONAL AIRPORT PANAMA'
                },
                to: {
                  city: 'DAV',
                  airport: 'ENRIQUE MALEK INTERNATIONAL AIRPORT PANAMA'
                },
                authorizedToSell: 100,
                sold: 60,
                available: 40
              },
              {
                id: 17,
                date: '04/30/2019',
                hour: '7:36:00 a. m.',
                from: {
                  city: 'PTY',
                  airport: 'TOCUMEN INTERNATIONAL AIRPORT PANAMA'
                },
                to: {
                  city: 'DAV',
                  airport: 'ENRIQUE MALEK INTERNATIONAL AIRPORT PANAMA'
                },
                authorizedToSell: 154,
                sold: 76,
                available: 78
              },
              {
                id: 101,
                date: '04/30/2019',
                hour: '3:51:00 p. m.',
                from: {
                  city: 'PTY',
                  airport: 'TOCUMEN INTERNATIONAL AIRPORT PANAMA'
                },
                to: {
                  city: 'COR',
                  airport: 'INGENIERO AERON¡UTICO AMBROSIO L.V. TARAVELLA INTERNATIONAL AIRPORT (PAJAS BLANCAS)\tARGENTINA'
                },
                authorizedToSell: 154,
                sold: 152,
                available: 2
              },
              {
                id: 106,
                date: '04/30/2019',
                hour: '11:45:00 a. m.',
                from: {
                  city: 'PTY',
                  airport: 'TOCUMEN INTERNATIONAL AIRPORT PANAMA'
                },
                to: {
                  city: 'MGA',
                  airport: 'AUGUSTO C. SANDINO INTERNATIONAL AIRPORT NICARAGUA'
                },
                authorizedToSell: 94,
                sold: 96,
                available: -2
              },
              {
                id: 712,
                date: '04/30/2019',
                hour: '6:35:00 p. m.',
                from: {
                  city: 'PTY',
                  airport: 'TOCUMEN INTERNATIONAL AIRPORT PANAMA'
                },
                to: {
                  city: 'MGA',
                  airport: 'AUGUSTO C. SANDINO INTERNATIONAL AIRPORT NICARAGUA'
                },
                authorizedToSell: 94,
                sold: 98,
                available: -4
              },
              {
                id: 387,
                date: '04/30/2019',
                hour: '3:26:00 p. m.',
                from: {
                  city: 'PTY',
                  airport: 'TOCUMEN INTERNATIONAL AIRPORT PANAMA'
                },
                to: {
                  city: 'MGA',
                  airport: 'AUGUSTO C. SANDINO INTERNATIONAL AIRPORT NICARAGUA'
                },
                authorizedToSell: 94,
                sold: 116,
                available: -22
              },
              {
                id: 169,
                date: '04/30/2019',
                hour: '6:25:00 a. m.',
                from: {
                  city: 'PTY',
                  airport: 'JUAN SANTAMARÕA INTERNATIONAL AIRPORT COSTA RICA'
                },
                to: {
                  city: 'MGA',
                  airport: 'AUGUSTO C. SANDINO INTERNATIONAL AIRPORT NICARAGUA'
                },
                authorizedToSell: 124,
                sold: 46,
                available: 78
              }
            ]
          }
        });
      },
      100
    );
  }
);
