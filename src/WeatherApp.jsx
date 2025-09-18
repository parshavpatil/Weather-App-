import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        city : "Kolhapur",
        feelsLike: 26.37,
        humidity: 82,
        temp: 25.61,
        tempMax: 25.61,
        tempMin: 25.61,
        weather: "broken clouds",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);

    };


    return (
        <div style={{textAlign : "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );

};