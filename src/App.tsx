import React from 'react';
import './App.css';
import WeatherPage from './components/pages/WetherPage/WeatherPage';
import {SearchBox} from './components/atoms/SerchBox/SearchBox';
import {WeatherProvider} from './context/WeatherContext';
import {ListPanel} from "components/ListPanel/ListPanel";
import {Box, styled, useMediaQuery} from "@mui/material";
import {WeatherPanel} from "components/WeatherPanel/WeatherPanel";
const ListPanelContainer = styled(Box)(({theme}) => ({
  width: useMediaQuery(theme.breakpoints.up('md')) ? '30%' : '100%',
}));
function App() {
  return (
    <WeatherProvider>
      <WeatherPage>
        <ListPanelContainer>
          <SearchBox/>
          <ListPanel />
        </ListPanelContainer>
        <WeatherPanel />
      </WeatherPage>
    </WeatherProvider>

  );
}

export default App;
