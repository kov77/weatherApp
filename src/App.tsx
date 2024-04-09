import React from 'react';
import './App.css';
import WeatherPage from './components/pages/WetherPage/WeatherPage';
import {SearchBox} from './components/atoms/SerchBox/SearchBox';
import {WeatherProvider} from './context/WeatherContext';
import {ListPanel} from "components/ListPanel/ListPanel";
import {Box} from "@mui/material";
import {WeatherPanel} from "components/WeatherPanel/WeatherPanel";

function App() {
  return (
    <WeatherProvider>
      <WeatherPage>
        <Box>
          <SearchBox/>
          <ListPanel />
        </Box>
        <WeatherPanel />
      </WeatherPage>
    </WeatherProvider>

  );
}

export default App;
