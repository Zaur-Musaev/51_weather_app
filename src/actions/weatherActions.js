export const PUT_WEATHER_INFO = "PUT_WEATHER_INFO";
export const PUT_MESSAGE = "PUT_MESSAGE";

export const putWeatherInfo = (weatherInfo) => {
  return {
    type: PUT_WEATHER_INFO,
    payload: weatherInfo,
  };
};

export const putMessage = (message) => {
  return {
    type: PUT_MESSAGE,
    payload: message,
  };
};

export const fetchWeather = (city) => {
    return async (dispatch) => {
      dispatch(putMessage('Pending...'));
      try {
        const apiKey = process.env.BASE_URL;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        const weatherInfo = {
          country: data.sys.country,
          city: data.name,
          temp: data.main.temp,
          pressure: data.main.pressure,
          sunset: data.sys.sunset,
        };
        dispatch(putWeatherInfo(weatherInfo));
      } catch (error) {
        console.log(error);        
        dispatch(putMessage(`Enter correct city name`));
      }
    };
  };
  