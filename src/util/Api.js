import axios from 'axios';

export const httpClient = axios.create({
  baseURL: `http://127.0.0.1:8000/api/`, //API_URL HERE
  headers: {
    'Content-Type': 'application/json',
  },
});
