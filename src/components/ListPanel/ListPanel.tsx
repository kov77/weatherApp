import {useWeatherContext} from "../../context/WeatherContext";
import {getWeather} from "types/commonTypes";
import {CityCard} from "components/atoms/CityCard/CityCard";
import {Box, styled} from "@mui/material";
import AppButton from "components/atoms/AppButton";
import {useEffect} from "react";

const ListPanelContainer = styled(Box)(({theme}) => ({
  boxSizing: 'border-box',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '10px',
  marginTop: '30px',
}));
export const ListPanel = () => {
  const {weatherData, setWeatherData, setCurrentWidget} = useWeatherContext();

  useEffect(() => {
    if(weatherData.length < 1) {
      setCurrentWidget(undefined)
    }
  }, [weatherData, setCurrentWidget]);

  const removeListItem = (e: React.MouseEvent<HTMLElement>) => {
    const filteredData = weatherData.filter((el: getWeather) => {
      const parentElement = e.currentTarget.parentNode;
      if (parentElement instanceof HTMLElement) {
        return el.id.toString() !== parentElement.id;
      }
      return false;
    });
    setWeatherData(filteredData)
  }

  const cardHandler = (e: React.MouseEvent<HTMLElement>) => {
    const currentEl = weatherData.find((el: getWeather) => el.id.toString() === e.currentTarget.id)
    if((e.target as HTMLElement).tagName  !==  "BUTTON") {
      setCurrentWidget(currentEl)
    }
  }

  const clearList = () => {
    setWeatherData([])
    setCurrentWidget(undefined)
  }

  return <ListPanelContainer>
    {(weatherData.map((el: getWeather) =>
      <CityCard cardHandler={cardHandler} removeListItem={removeListItem} id={el.id.toString()} key={el.id}
                icon={el.weather[0].icon}
                temp={el.main.temp} city={el.name}/>))}
    <AppButton onClick={clearList}>Clear</AppButton>
  </ListPanelContainer>

}
