import { useState } from "react";
import Popup from "./components/Popup";

const api = {
  key:"ef67dc350e67704af20b2fd758d6883d",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {

  const [temp,setTemp]=useState(null);
  const [degree,setDegree]=useState('F');
const [popupBtn,setPopupBtn] = useState(false)

   const[query,setQuery]=useState('')
   const[weather,setWeather]=useState({});
   const search = evt => {
     if(evt.key === 'Enter'){
       fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
       .then(res => res.json())
       .then(result => {
         setWeather(result);
         setQuery('');
        //  console.log(result);
        try {
          
          setTemp( (result.main.temp!="undefined")?`Temperature: ${Math.round(result.main.temp)}°C`:'')
        } catch (error) {
          // errorMessage()
          setPopupBtn(true)
        } 
        //  console.log(Math.round(result.main.temp));
      });
       }
   }

    const  dateBuilder = (d)=> {
      let months = ["January","Fabruary","March","April","May","June","July","August",
    "September","October","November","December"];
      let days = ["Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday"];
      let day = days[d.getDay()];
      let date =d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
           
      // setTemp( `Temperature: ${Math.round(weather.main.temp)}°C`)

      return `${day} ${date} ${month} ${year}`
    }

    const handleTemp = ()=>{
      const cTemp = Math.round(weather.main.temp);
      const fTemp = Math.round((cTemp*1.8) + 32)
       if(degree==='F'){
        setDegree('C')
        setTemp(`Temperature: ${fTemp}°F`)
      }
      else{
        setDegree('F')
        setTemp(`Temperature: ${cTemp}°C`)
      }
    }
    
    
    
    
    
    return (
      <div className={(typeof weather.main !="undefined")?((weather.main.temp >20)?'app warm':'app'):'app'}>
       <main>
         <div className="search-box">
           <input type="text"
           className="search-bar"
           placeholder="Search ..."
           onChange={e => setQuery(e.target.value)}
           value={query}
           onKeyPress={search}/>
         </div>
         {(weather.main ==undefined)?(<div className='preview'>Weather App<br></br>Please enter a city name in th search box and then hit the "Enter" button.</div>) :''
         }
         {(typeof weather.main !="undefined")?(
           <div>
            <div className="location-box">
              <div className="location">{weather.name},{weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{temp}<button className="degree" onClick={handleTemp}>{degree}</button>
              </div>
              <div className="temp">Humidity: {Math.round(weather.main.humidity)}%
              </div>
              <div className="temp">Wind: {Math.round(weather.wind.speed)}km/h
              </div>
              <div className="weather">{weather.weather[0].description}
              </div>
            </div>
          </div>
         ):(  <Popup trigger={popupBtn } setTrigger={setPopupBtn}>Invalid city name!</Popup>
          )}
       </main>
       
    </div>
  );
}

export default App;
