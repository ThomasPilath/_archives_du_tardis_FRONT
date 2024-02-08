import axios from 'axios';
export const useApi = () => {
  const headers = {
    "Content-Type": "application/json",
    "Access-control-Allow-Origin": "*"
  };
  // const apiUrl = import.meta.env.VITE_API_URL
  const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers
  });

  return api
}