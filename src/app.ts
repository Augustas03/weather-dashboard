import { getCurrentWeather } from './api';
import { WeatherResponse } from './types';


document.addEventListener('DOMContentLoaded', () => {
    
    // DOM elements
    const searchInput = document.getElementById('cityInput') as HTMLInputElement;
    const searchButton = document.getElementById('searchBtn') as HTMLButtonElement;
    const weatherCard = document.getElementById('weatherCard') as HTMLDivElement;
    const cityNameEl = document.getElementById('cityName') as HTMLHeadingElement;
    const temperatureEl = document.getElementById('temperature') as HTMLSpanElement;
    const conditionEl = document.getElementById('condition') as HTMLSpanElement;
    const weatherIconEl = document.getElementById('weatherIcon') as HTMLImageElement;
    const feelsLikeEl = document.getElementById('feelsLike') as HTMLSpanElement;
    const humidityEl = document.getElementById('humidity') as HTMLSpanElement;
    const windEl = document.getElementById('wind') as HTMLSpanElement;
    const pressureEl = document.getElementById('pressure') as HTMLSpanElement;


    // Event listeners
    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Search handler
    async function handleSearch(): Promise<void> {
    const city = searchInput.value.trim();
    
    if (!city) {
        alert('Please enter a city name');
        return;
    }
    
    try {
        // Fetch the weather data
        const weatherData = await getCurrentWeather(city);
        
        // Display the data
        displayWeatherData(weatherData);
        
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        alert('Could not find weather for that location. Please try again.');
    }
    }

    // Display weather information
    function displayWeatherData(data: WeatherResponse): void {
    // Make the weather card visible
    weatherCard.classList.remove('hidden');
    
    // Update the UI with weather data
    cityNameEl.textContent = `${data.location.name}, ${data.location.country}`;
    temperatureEl.textContent = `${data.current.temp_c}°C`;
    conditionEl.textContent = data.current.condition.text;
    weatherIconEl.src = `https:${data.current.condition.icon}`;
    feelsLikeEl.textContent = `${data.current.feelslike_c}°C`;
    humidityEl.textContent = `${data.current.humidity}%`;
    windEl.textContent = `${data.current.wind_kph} km/h`;
    pressureEl.textContent = `${data.current.pressure_mb} hPa`;
    
    // TODO: Add more weather details
    // TODO: Format the date and time
    // TODO: Add forecast information
    }
});

