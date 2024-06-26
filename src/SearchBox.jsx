import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css"
export default function SearchBox({updateInfo }){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "bf240d3f03ef13b9a31605b016e40eac";
    let getWeatherInfo = async()=>{
       try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city:city,
            temp:jsonResponse.main.temp,
            tempMax:jsonResponse.main.temp_max,
            tempMin:jsonResponse.main.temp_min,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        }
        
        console.log(result);
        return result;
       } catch(err){
        throw err;
       }
    }
   
    let handleChange = (event)=>{
        setCity(event.target.value);
    }
    let handleSubmit = async(event)=>{
      try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo =  await getWeatherInfo();
        updateInfo(newInfo);
      } catch{
        setError(true);
      }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="City" label="City Name" 
            variant="outlined" required  value={city} onChange={handleChange}/>
            <br></br>  <br></br>
            <Button variant="contained" type='submit'>
        Search
      </Button>
      { error && <p style={{color:"red"}}>No such Place Exist!</p>}

            </form>
        </div>
    )
}