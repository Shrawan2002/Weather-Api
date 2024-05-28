import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){
    let INIT_URL = "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL ="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwaW1hZ2VzfGVufDB8fDB8fHww";
    const COLD_URL = "https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/157310640/photo/vietnamese-woman-riding-a-motorcycle-while-holding-an-umbrella.jpg?s=612x612&w=0&k=20&c=AUtgi0D_XUqJpBm9Awo-1v7jIJ07AOaL6OKLl6Q3DjM=";
    
    return(
        <div className='InfoBox'>
            <div className='card_container'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {
          info.humidity >80 
          ? RAIN_URL:
          info.temp > 15 ? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {  info.humidity >80 
          ? <ThunderstormIcon />:
          info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>the weather can be Described as <i>{info.weather} </i> and feels like {info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>
    </Card>
     </div>
          
        </div>
    )
}