/**
 * Created by Luis Arboleda on 01/06/2019
 */

const BASE_URL_DEV = '';
const BASE_URL_PROD = '';

export default process.env.NODE_ENV === 'development' ? BASE_URL_DEV : BASE_URL_PROD;
