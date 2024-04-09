import {getWeather} from "../types/commonTypes";
import React, {createContext, useContext, useState} from "react";

interface Props {
  children: React.ReactNode;
}

const WeatherContext = createContext<any>(null);

export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherProvider: React.FC<Props> = ({children}) => {
  const [weatherData, setWeatherData] = useState<getWeather[]>([]);
  const [currentWidget, setCurrentWidget] = useState<getWeather>();

  const values = {weatherData, setWeatherData, currentWidget, setCurrentWidget}

  return (
    <WeatherContext.Provider value={values}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
