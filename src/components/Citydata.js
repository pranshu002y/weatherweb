import React, { useState, useEffect, useContext } from 'react'
import { datacontext } from './Searchcity'

import Clear from './images/clear.png'
import Clouds from './images/clouds.png'
import Drizzle from './images/drizzle.png'
import Mist from './images/mist.png'
import Rain from './images/rain.png'
import Haze from './images/haze.png'

import '../App.css'

export default function Citydata() {

    let sky_img = null;

    const { temperature, min_temp, max_temp, feels, humid, cloud, descp,icon, wind, press, deg, sunr, suns, visib,city} = useContext(datacontext)

    console.log(cloud)

  

    return (
        <div className='city_information text-white pt-5 d-flex justify-content-center align-items-center align-items-center'>

            {!temperature ? (
                <div class="spinner-border " role="status">
                    <span class="visually-hidden"></span>
                </div>
            ) : (
                <div className='city_info  row g-10 '>

                    <div className='temperature p-3 col-sm-12 col-lg-6 ml-2'>

                        <div className='temp_data row rounded'>

                            <div className='today_temp col-8'>
                                <span className='display-6 col'>{Math.floor(temperature)} °C</span>
                                <span className='display-6 col'>feels : {Math.floor(feels)} °C</span>
                                <span className='display-6 col'>{descp}</span>
                            </div>

                            <div className='image_div col-4'>
                                {/* <img className='sky_image img-fluid img-sm' src={sky_img} alt={"sky_img"} /> */}

                                <img
                                    src={`https://openweathermap.org/img/w/${icon}.png`}
                                    alt={"forecast"}
                                    className="img-fluid mx-auto d-block icon"
                                />
                            </div>

                        </div>

                        <div className='rise-set-time row pt-3 pb-3'>

                            <div className='col'>
                                <p className='text-secondary'>Sunrise</p>
                                <i class="bi bi-brightness-high-fill h3"></i>
                                <span className='display-6'> {sunr}</span>
                            </div>

                            <div className='col'>
                                <p className='text-secondary'>Sunset</p>
                                <i class="bi bi-moon-fill h3"></i>
                                <span className='display-6'> {suns}</span>
                            </div>

                        </div>


                    </div>

                    <div className='other_data  col-sm-12 col-lg-6 pt-2'>
                        <p>Todays highlight</p>

                        <div className='properties row row-cols-3 pt-2 g-3'>

                            <div className='col'>
                                <p className='text-secondary'>Humidity</p>
                                <i class="bi bi-droplet-half text-white h3"></i>
                                <span className='display-6'> {humid} %</span>
                            </div>

                            <div className='col'>
                                <p className='text-secondary'>wind speed</p>
                                <i class="bi bi-wind text-white h3"></i>
                                <span className='display-6'> {wind}</span><span> Km/h</span>
                            </div>

                            <div className='col'>
                                <p className='text-secondary'>Wind direction</p>
                                <i class="bi bi-compass h3"></i>
                                <span className='display-6'> {deg} °</span>
                            </div>

                            <div className='col pt-3 '>
                                <p className='text-secondary'>Pressure</p>
                                <i class="bi bi-chevron-bar-down h3"></i>
                                <span className='display-6'> {press}</span><span> hPa</span>
                            </div>

                            <div className='col pt-3 '>
                                <p className='text-secondary'>Visibility</p>
                                <i class="bi bi-eye-fill h3"></i>
                                <span className='display-6'> {visib} km</span>
                            </div>

                            <div className='col pt-3 '>
                                <p className='text-secondary'>Weather Condition</p>
                                <i class="bi bi-clouds h3"></i>
                                <span className='display-6'> {cloud}</span>
                            </div>

                        </div>

                    </div>




                </div>
            )
            }
        </div>
    )
}
