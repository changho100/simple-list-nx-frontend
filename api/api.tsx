import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Adjust the base URL as needed
});

export const getItems = async () => {
  const response = await api.get('/items');
  return response.data;
};

export const getHello = async () => {
  const response = await api.get('/hello');
  return response.data;
};