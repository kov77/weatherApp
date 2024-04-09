import {IconButton, InputAdornment, Stack, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
import {getCurrentForecast} from "../../../api/search";
import {useWeatherContext} from "../../../context/WeatherContext";
import AppButton from "../AppButton";
import {getWeather} from "../../../types/commonTypes";

export const SearchBox = () => {
  const [inputValue, setInputValue] = useState('')
  const [data, setData] = useState<getWeather>();
  const [errorText, setErrorText] = useState(undefined);
  const {weatherData, setWeatherData, currentWidget, setCurrentWidget} = useWeatherContext();

  const handleChangeSearchValue = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value.length > 2) {
      await getCurrentForecast(e.target.value).then((res) => {
        setErrorText(undefined)
        setData(res)
      }).catch((e) => {
        if (inputValue.length > 2) {
          setErrorText(e.response.data.message)
        }
      })
    } else {
      setErrorText(undefined)
    }
  }

  const addWeather = () => {
    if (inputValue.length > 1 && data) {
      if (weatherData.length < 10) {
        setWeatherData([...weatherData, data])
        setData(undefined)
      } else {
        const newArr = [...weatherData]
        setWeatherData([newArr.splice(newArr.length - 1, 1, data)])
        setData(undefined)
      }
      if (!currentWidget) {
        setCurrentWidget(data)
      }
      setInputValue('');
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      addWeather();
    }
  }

  return <Stack sx={{display: 'flex', flexDirection: 'row', gap: 2}}>
    <TextField
      error={!!errorText}
      placeholder={'Search'}
      onKeyDown={handleKeyPress}
      onChange={handleChangeSearchValue}
      value={inputValue}
      fullWidth
      helperText={errorText}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" sx={{width: 35}}>
            <IconButton edge="end">
              <SearchIcon/>
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
    <AppButton onClick={addWeather} disabled={!!errorText}>+</AppButton>
  </Stack>
}
