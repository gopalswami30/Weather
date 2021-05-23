import React, { useEffect, useState } from 'react'
import './index.css'
const Main=()=>{
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState('');
    const inputChg=(event)=>{
        setSearch(event.target.value)
        
    }
    useEffect(()=>{
        const fetchApi=async ()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4b9342b8087b6db6ad419820cd6ac465`
           const response=await fetch(url);
           const resJson=await response.json();
           console.log(resJson);
           console.log(city);
           if(resJson.cod!=='400'&&resJson.cod!=='404')
           setCity(resJson);
           console.log(city);
        }
        fetchApi();
    },[search])
    return (<>
       <div className='mainbox'>
      <div className='inputbox'>
          <input type='search' value={search} className='inputField' onChange={inputChg}></input>
      </div>
      {!city?<p>No data found</p>:
           <div className='info'>
         <h2 className='location'>
         <i className="fas fa-map-marker-alt"></i>
           {search}
         </h2>
         <h1 className='temp'>{city.main.temp}°cel</h1>
         <h3 className='min_max'>Min:{city.main.temp_min}° cel | Max:{city.main.temp_max}° cel</h3>
     </div>
       }
       </div>
    </>)
}
export default Main