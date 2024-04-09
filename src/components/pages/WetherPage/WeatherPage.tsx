import {Box, BoxProps, styled, useMediaQuery, useTheme} from "@mui/material";

const PageContainer = styled(Box)(( {theme}) => ({
  padding: '2rem',
  display: 'flex',
  flexWrap: useMediaQuery(theme.breakpoints.up('md')) ? 'nowrap' : 'wrap',
  gap: '30px',
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
}));

const WeatherPage = ({children}: BoxProps) => {
  const  theme = useTheme()
  console.log(theme.breakpoints.down('lg'))
  return <PageContainer>
    {children}
  </PageContainer>
}

export default WeatherPage
