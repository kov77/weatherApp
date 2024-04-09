import {Box, ButtonProps, Card, styled, Typography} from "@mui/material";
import AppButton from "../AppButton";
import AppImage from "../AppImage";

const StyledCard = styled(Card)(() => ({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px  solid #fff',
  borderRadius: '8px',
  cursor: 'pointer',
  '&:hover':  {
    backgroundColor:  '#f5f5f5'
  }
}));

const InfoBlock = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '5px',
  'p': {
    fontSize: '1.2rem'
  },
}));

interface Props {
  id: string,
  icon: string,
  temp: number,
  city: string,
  removeListItem: (e: React.MouseEvent<HTMLElement>) => void,
  cardHandler: (e: React.MouseEvent<HTMLElement>) => void,
}

export const CityCard = ({id, icon, temp, city, cardHandler, removeListItem}: Props & ButtonProps) => {
  return <StyledCard onClick={cardHandler} id={id}>
    <InfoBlock >
      <AppImage width={50} path={icon}/>
      <Typography>{Math.round(temp)}°C</Typography>
      <Typography>{city}</Typography>
    </InfoBlock>
    <AppButton onClick={removeListItem}>-</AppButton>
  </StyledCard>
}
