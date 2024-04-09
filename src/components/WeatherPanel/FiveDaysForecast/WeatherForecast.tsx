import {Card, styled, Typography} from "@mui/material";
import AppImage from "components/atoms/AppImage";
import {ForecastListEl, getForecastFiveDays} from "types/commonTypes";
import dayjs from "dayjs";

const ForecastCardContainer = styled(Card)(() => ({
  padding: '1.5rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

interface PropsType {
  data: ForecastListEl
}

export const ForecastCard = ({data}: PropsType) => {
  const time = dayjs.unix(data.dt).format('HH:mm')
  const img = data.weather[0].icon

  return <ForecastCardContainer>
    <Typography>Time: {time}</Typography>
    <AppImage width={80} path={img}/>
    <Typography>Temperature</Typography>
    <Typography>{`Min ${Math.round(data.main.temp_min)}°C /  Max ${Math.round(data.main.temp_max)}°C`}</Typography>

  </ForecastCardContainer>
}
