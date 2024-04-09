import { api } from "./instances";
import {API} from "./constants";
import {getForecastFiveDays, getWeather} from "../types/commonTypes";

export const getCurrentForecast = async (city: string, params?: Partial<Record<string, unknown>>,) => {
  const response = await api.get<getWeather>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API.APIKey}`, params);
  return response.data;
};

export const getFiveDaysForecast = async (city: string, params?: Partial<Record<string, unknown>>,) => {
  const response = await api.get<getForecastFiveDays>(`/data/2.5/forecast/?q=${city}&cnt=5&units=metric&appid=${API.APIKey}`, params);
  return response.data;
};

