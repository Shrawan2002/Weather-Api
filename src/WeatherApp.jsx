import SearchBox from './SearchBox.jsx'
import InfoBox from "./InfoBox.jsx"
import { useState } from 'react'
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze"
    });
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);

    }
    return(
        <div>
            <h2>Weather App By Delta</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}