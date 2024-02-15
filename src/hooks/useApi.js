import axios from 'axios';

export const useApi = () => {
  const headers = {
    "Content-Type": "application/json",
    "Access-control-Allow-Origin": "*"
  };

  console.log("VITE :",import.meta.env.VITE_BASE_URL)
  console.log("BASE :",import.meta.env.BASE_URL)
  const apiUrl = import.meta.env.VITE_BASE_URL || import.meta.env.BASE_URL

  const api = axios.create({
    baseURL: apiUrl,
    headers
  });

  return api
}