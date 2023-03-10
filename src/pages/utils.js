import { API_URL } from './constants';

export const generateApiUrl = path => `${API_URL}${path}`;

export const sort = arr => arr.sort((a,b)=>  (a.namr > b.name) ? 1 : ((b.name > a.name) ? -1 : 0) );