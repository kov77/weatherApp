import {Box, BoxProps, styled} from "@mui/material";

const PageContainer = styled(Box)(({ theme }) => ({
  padding: '2rem',
  display: 'flex',
  gap: '30px',
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
}));

const WeatherPage = ({children}: BoxProps) => {
  return <PageContainer>
    {children}
  </PageContainer>
}

export default WeatherPage
