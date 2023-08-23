import React, { useState, useEffect, createContext, useContext } from 'react'

import { datacontext } from './Searchcity'
import './style.css'

export default function Forecast() {

    const [api, setapi] = useState([])

    const { temperature, min_temp, max_temp, feels, humid, cloud, descp, wind, press, deg, sunr, suns, visib,city} = useContext(datacontext)



    useEffect(() => {
        const fetchApi = async () => {


            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=aa4e7d464fd14f1e0496e2b4593a7d40&units=metric`
            try {

                const response = await fetch(url);
                const respjson = await response.json();
                setapi(respjson.list);

                console.log(respjson.list)
            }

            catch (e) {
                console.log("error occured")
                console.error(e)

            }

        }

        fetchApi();


    }, [city]);

    const formatTime = (dateTime) => {
        const date = new Date(dateTime);
        let hours = date.getHours();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours %= 12;
        hours = hours || 12; // If hours is 0, set it to 12
        return `${hours} ${ampm}`;
    };

    const formatDayAndDate = (dateTime) => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const date = new Date(dateTime);
        const dayOfWeek = days[date.getDay()];
        const dayOfMonth = date.getDate();
        return `${dayOfWeek}, ${dayOfMonth}`;
    };

    return (
        <div className='text-white'>

            {!api ? (
                <p className='text-center'>Loading...</p>
            ) : (

            <div className='forcast_section'>

                <h2 className='text-center pt-3'>Hourly Forcast :</h2>

                <div className="hourly">

            
                        {api.slice(0,24).map((forecast, index) => (

                            <div key={index} className="weather-item">

                                <u><h5 className='text-center '>{formatTime(forecast.dt_txt)}</h5></u>

                                <h5 className='text-center'>{Math.floor(forecast.main.temp_max)}°C</h5>
                                <p className='text-center'>{Math.floor(forecast.main.temp_min)}°C</p>
                                <img
                                    src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                                    alt={forecast.weather[0].description}
                                    className="weather-img"
                                    
                                />
                                <p className='text-center weather_txt'>{forecast.weather[0].description}</p>


                            </div>
                        ))}
                  
                </div>

            
                    <h2 className='text-center mt-3'>Daily Forcast</h2>

                    <div className='daily_data'>
                    <div className='daily'>
                    {api.map((forecast, index) => {

                        if (index % 8 === 0) {

                            return (

                                <div key={index} className="weather-item col m-2">

                                    <u><h5 className='text-center'>{formatDayAndDate(forecast.dt_txt)}</h5></u>

                                    <h5 className='text-center'>{Math.floor(forecast.main.temp)}°C</h5>
                                    <p className='text-center'>{Math.floor(forecast.main.temp_min)}°C</p>
                                    <img
                                        src={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                                        alt={forecast.weather[0].description}
                                        className="weather-img"
                                    />
                                    <p className='text-center'>{forecast.weather[0].description}</p>

                                </div>
                            )
                        }
                    })}
                </div>
            </div>
            </div>
            )}

        </div>
    );
}
