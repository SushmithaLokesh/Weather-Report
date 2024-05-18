import { useState } from "react"
import axios from "axios"

function Weather() 
{
    const [city,setCity] = useState("")

    const [weather,setWeather] = useState("")
    const [temp,setTemp] = useState("")
    const [desp,setDesp] = useState("")

    function handleCity(event)
    {
        setCity(event.target.value)
    }

    function getWeather()
    {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1d6dd77623b647001914494a234ca362`)

        weatherData.then(function(success)
    {
        setWeather(success.data.weather[0].main)
        setTemp(success.data.main.temp)
        setDesp(success.data.weather[0].description)
    })
    }
    return (
        <>
            <div className="bg-black p-20">
                <div className="bg-green-500 p-10 rounded-md" >
                    <h2 className="text-2xl font-medium">Weather Report</h2>
                    <p>I can give you a weather Report about your city !</p>
                    <input onChange={handleCity} type="text" className="mt-2 border border-black rounded-md p-1 outline-none" placeholder="Enter Your City Name"></input> <br />
                    <button onClick={getWeather} className="bg-black text-white mt-2 p-2 rounded-md">Get Report</button>
                    <div className="mt-2">
                        <p><b>Weather: </b>{weather}</p>
                        <p><b>Temperature: </b>{temp}</p>
                        <p><b>Description: </b>{desp}</p>
                    </div>
                </div>
            </div>
        </>)
}

export default Weather