import React, { useEffect, useState } from "react";


const Temp=()=>{
   const [city, setCity]= useState(null);
   const [search, setSearch]= useState('faisalabad')
useEffect(()=>{

const fetchApi= async ()=>{
   const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=55df27d30131cb62090a5c936967afac`
   const response= await fetch(url)
   const resJson=  await response.json();
   setCity(resJson.main);
   console.log(resJson)
}

   fetchApi();
}, [search])
   return(
    <>
        <div className="box">
     <div className="inputData">
     <input type="search"
     className="inputField"
     placeholder="search a city..."
     onChange={(event)=>{
        setSearch(event.target.value)
     }}
      />
     </div>

     {!city ? (<p className="no-data" >No Data Found 🥰</p>)
     : (
      <div>
      <div className="info">
    <h2 className="location">
    
    <i className="fa-solid fa-cloud"></i>
    {search}
    </h2>
    <h2 className="w-text">
   {city.temp}°Cel
    </h2>
    <h4 className="l-degree">
min:{city.temp_min}°Cel || max:{city.temp_max}°Cel    </h4>
        </div>
        <div class="waveWrapper waveAnimation">
  <div class="waveWrapperInner bgTop">
    <div class="wave waveTop" ></div>
  </div>
  <div class="waveWrapperInner bgMiddle">
    <div class="wave waveMiddle" ></div>
  </div>
  <div class="waveWrapperInner bgBottom">
    <div class="wave waveBottom" ></div>
  </div>
</div>
      </div>
     )
     }
     
        </div>
    </>
   )
}
export default Temp;