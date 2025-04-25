import { WeatherResponse } from './types';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';



export async function getCurrentWeather(city: string): Promise<WeatherResponse> {

    try{

        //Building URL with query parameters
        const url = `${BASE_URL}/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=no`;

        //API request
        const response = await fetch(url);

        //Check if response was ok
        if(!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'Failed to fetch weather data');
        }

        //Parse JSON and return
        const data: WeatherResponse = await response.json();
        return data;
    } catch (error){
        console.error('Error fetching weather: ', error);
        throw error;
    }
}