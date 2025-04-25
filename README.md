# Weather Dashboard

A simple, beginner-friendly TypeScript application that displays current weather information using the WeatherAPI.com REST API.

## Features

- Search for weather by city name
- Display current temperature, conditions, and weather icon
- Show additional weather details like humidity and wind
- Responsive design that works on mobile and desktop

## Technologies Used

- TypeScript
- HTML/CSS
- Vite (for bundling and development)
- WeatherAPI.com REST API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-dashboard.git
   cd weather-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add your WeatherAPI.com API key:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

   You can get a free API key by signing up at [WeatherAPI.com](https://www.weatherapi.com/).

4. Create an `env.d.ts` file to make TypeScript aware of the environment variables:
   ```typescript
   /// <reference types="vite/client" />

   interface ImportMetaEnv {
     readonly VITE_WEATHER_API_KEY: string;
   }

   interface ImportMeta {
     readonly env: ImportMetaEnv;
   }
   ```

### Development

Start the development server:

```bash
npx vite
```

The application will be available at http://localhost:5173.

### Building for Production

Build the application:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
weather-dashboard/
├── node_modules/
├── src/
│   ├── api.ts       # API service for WeatherAPI.com
│   ├── app.ts       # Main application logic
│   └── types.ts     # TypeScript interfaces
├── .env             # Environment variables (not in git)
├── .gitignore       # Git ignore file
├── env.d.ts         # TypeScript definitions for env vars
├── index.html       # Main HTML file
├── package.json     # Project dependencies and scripts
├── styles.css       # CSS styles
└── tsconfig.json    # TypeScript configuration
```

## Learning Objectives

This project demonstrates:

- How to work with TypeScript interfaces for API responses
- Making asynchronous API requests
- Error handling in TypeScript
- DOM manipulation with TypeScript
- Using environment variables for API keys
- Working with a simple build system (Vite)

## Future Enhancements

- Add a 5-day forecast display
- Implement geolocation to get the user's current weather
- Add unit conversion between Celsius and Fahrenheit
- Include weather maps or visualizations
- Add local storage to remember the last searched city

## License

[MIT](LICENSE)

## Acknowledgements

- [WeatherAPI.com](https://www.weatherapi.com/) for the weather data