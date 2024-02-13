import axios from 'axios';

export const useApi = () => {
  const headers = {
    "Content-Type": "application/json",
    "Access-control-Allow-Origin": "*"
  };

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers
  });

  return api
}