
//Main response interface
export interface WeatherResponse {
    location: Location;
    current: CurrentWeather;
    forecast?: Forecast;
}


//Location information
export interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime: string;
}


//Weather condition
export interface Condition {
    text: string;
    icon: string;
    code: number;
}

//Current Weather data
export interface CurrentWeather{
    last_updated: string;
    temp_c: number;
    is_day: number;
    condition: Condition;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    precip_mm: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    vis_km: number;
    uv: number;
}


export interface Forecast {
    forecastday: ForecastDay[];
}

export interface ForecastDay {
    date: string;
    date_epoch: string;
    day: Day;
}

export interface Day {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    condition: Condition;
}
