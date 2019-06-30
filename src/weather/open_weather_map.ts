import { IForecast } from "../types";

const WEATHER_API_KEY = "594d6f000270249696eb1b72b34ee69d";
const API_STEM = "https://api.openweathermap.org/data/2.5/weather?";
function cityUrl(city: string): string {
  return `${API_STEM}q=${city}&units=metric&appid=${WEATHER_API_KEY}`;
}

function fetchForecast(city: string): Promise<IForecast | void> {
  return fetch(cityUrl(city))
    .then(response => response.json())
    .then(responseJSON => {
      return {
        main: responseJSON.weather[0].main,
        description: responseJSON.weather[0].description,
        temp: responseJSON.main.temp
      };
    })
    .catch(error => {
      console.error(error);
    });
}
export default { fetchForecast: fetchForecast };
