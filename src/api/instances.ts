import axios from "axios";

const url = `https://api.openweathermap.org/`

const apiConfig = {
  baseURL: url,
};

export const api = axios.create({ ...apiConfig });
