import React, { useState } from 'react'
import { fetchWeatherData } from './api.js'

function weatherSearch() {
    const [address, setAddres] = useState('')
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState('')


const handleSearch = async (e) => {
    e.preventDefault();
    try{
        const data = await fetchWeatherData(address)
        setWeatherData(data);
        console.log(weatherData.data)
        setError('');
        console.log(data)
    } catch (error) {
        setWeatherData(null);
        setError(error.message)
    } 

}

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" value={address}
                onChange={(e) => setAddres(e.target.value)}
                placeholder='Digite o endereço'
                />
                <button type='submit'>Pesquisar</button>
            </form>
            {error && <div>{error}</div>}
            {weatherData && (
                <div>
                    {/* <p>{weatherData}</p> */}
                </div>
            )}
        </div>
    )
}

export default weatherSearch