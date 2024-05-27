import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox(){
    let [city,setCity] = useState("");
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "bf240d3f03ef13b9a31605b016e40eac";
    let getWeatherInfo = async()=>{
        let response = await fetch(`${API_URL}?q=${city}$appid=${API_KEY}`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
    }
    let handleChange = (event)=>{
        setCity(event.target.value);
    }
    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }

    return (
        <div>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="City" label="City Name" 
            variant="outlined" required  value={city} onChange={handleChange}/>
            <br></br>  <br></br>
            <Button variant="contained" type='submit'>
        Search
      </Button>

            </form>
        </div>
    )
}