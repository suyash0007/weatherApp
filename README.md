# Weather App

This is a React application that displays weather information for different locations around the world using the Open-Meteo API. The app features a dynamic UI with weather cards that change color based on the current weather conditions.

## Features

- Display current weather and 3-day forecast for multiple cities
- Dynamic background colors based on weather conditions
- Responsive design that works on desktop and mobile devices
- Real-time data fetching from Open-Meteo API

## Technologies Used

- React
- Tailwind CSS
- Axios for API requests

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/ShoshinTech22/Recruitment-2616-Suyash-Tiwari
   cd weatherapp
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## Usage

The `WeatherCard` component can be used as follows:

```jsx
<WeatherCard latitude={51.5074} longitude={-0.1278} name="London" />
```

The component will fetch and display the current weather and a 3-day forecast for the specified location.

## API

This project uses the Open-Meteo API for weather data. The API is called with the following parameters:

```
https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&past_days=3
```

## Data Structure

The component expects data in the following structure:

```javascript
{
  current: {
    temperature_2m: number
  },
  daily: {
    time: string[],
    weathercode: number[],
    temperature_2m_max: number[],
    temperature_2m_min: number[]
  }
}
```

## Styling

This project uses Tailwind CSS for styling. The styles are applied using custom tailwind classes and directly into jsx. The app features a responsive design and dynamic background colors based on weather conditions.
