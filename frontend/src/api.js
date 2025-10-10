import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001/api', // This should be in an environment variable
});

export const register = (userData) => API.post('/auth/register', userData);
export const login = (userData) => API.post('/auth/login', userData);
export const getProducts = () => API.get('/products');

export default API;
