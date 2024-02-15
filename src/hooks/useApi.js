import axios from 'axios';

export const useApi = () => {
  const headers = {
    "Content-Type": "application/json",
    "Access-control-Allow-Origin": "*"
  };

  const apiUrl = import.meta.env.VITE_API_URL || process.env.API_BASE_URL
  console.log("VITE :", import.meta.env.VITE_API_URL)
  console.log("BASE :", process.env.API_BASE_URL)
  console.log("apiUrl :", apiUrl)

  const api = axios.create({
    baseURL: apiUrl,
    headers
  });

  return api
}