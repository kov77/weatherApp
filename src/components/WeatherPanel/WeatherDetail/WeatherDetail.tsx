import {Box, styled, Typography} from "@mui/material";
import AppImage from "components/atoms/AppImage";
import {getWeather} from "types/commonTypes";

const WeatherDetailContainer = styled(Box)(() => ({
  padding: '2rem 1.5rem',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  marginTop: '30px',
}));

interface Props {
  currentWidget: getWeather,
}

export const WeatherDetail = ({currentWidget} : Props) => {
  return <WeatherDetailContainer>
    <Box>
      <AppImage width={130} path={currentWidget.weather[0].icon}/>
    </Box>
    <Box sx={{padding: '1rem'}}>
      <Typography>Pressure: {currentWidget.main.pressure}</Typography>
      <Typography>Humidity: {currentWidget.main.humidity}%</Typography>
      <Typography>Wind: {currentWidget.wind.speed}m/s</Typography>
      <Typography>Visibility: {currentWidget.visibility/1000}km</Typography>
    </Box>

  </WeatherDetailContainer>
}
