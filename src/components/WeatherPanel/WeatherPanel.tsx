import {Card, styled, Typography} from "@mui/material"
import {useWeatherContext} from "context/WeatherContext";
import dayjs from "dayjs";
import {WeatherDetail} from "components/WeatherPanel/WeatherDetail/WeatherDetail";
import {FiveDaysForecast} from "components/WeatherPanel/FiveDaysForecast/FiveDaysForecast";

const WeatherPanelContainer = styled(Card)(() => ({
  padding: '3rem',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  overflow: 'auto',
}));
export const WeatherPanel = () => {
  const {currentWidget} = useWeatherContext();
  const currentDate = dayjs().format('DD.MM.YYYY');

  return (currentWidget ? <WeatherPanelContainer>
    <Typography variant={'h4'}>{currentWidget.name}</Typography>
    <Typography variant={'h6'}>{currentDate}</Typography>
    <Typography
      variant={'body1'}>{`Min ${Math.round(currentWidget.main.temp_min)}°C /  Max ${Math.round(currentWidget.main.temp_max)}°C, Feels like  ${Math.round(currentWidget.main.feels_like)}°C`}</Typography>
    <WeatherDetail currentWidget={currentWidget}/>
    <FiveDaysForecast/>

  </WeatherPanelContainer> : <></>)
}
