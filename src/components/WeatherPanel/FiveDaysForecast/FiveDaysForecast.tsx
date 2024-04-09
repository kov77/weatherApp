import {ForecastCard} from "components/WeatherPanel/FiveDaysForecast/WeatherForecast";
import {Box, styled} from "@mui/material";
import {useEffect, useState} from "react";
import {useWeatherContext} from "context/WeatherContext";
import {getFiveDaysForecast} from "api/search";
import {ForecastListEl, getForecastFiveDays} from "types/commonTypes";

const Container = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'space-between',
  flexWrap: 'wrap',
  gap: '10px',
  marginTop: '5rem',
}));
export const FiveDaysForecast = () => {
  const [data, setData] = useState<getForecastFiveDays>()
  const {currentWidget} = useWeatherContext();

  useEffect(() => {
    getFiveDaysForecast(currentWidget.name).then(res => setData(res)).catch((e) => console.log(e))
  }, [currentWidget]);

  return <Container>
    {data?.list.map((el: ForecastListEl, index: number) => <ForecastCard key={index} data={el}/>)}

  </Container>
}
