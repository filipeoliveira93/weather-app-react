import React, {useContext, useState } from 'react'
import { fetchWeatherData } from './api.js'
import WeatherContext from './weatherContext.js'


function weatherSearch() {
    let [address, setAddres] = useState('')
    const { setWeatherData } = useContext(WeatherContext)
    const [error, setError] = useState('')


const handleSearch = async (e) => {

    e.preventDefault();
    address = address ? address : 'Maringá - PR';
    try{
        const data = await fetchWeatherData(address)
        setWeatherData(data);
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
            
        </div>
    )
}

export default weatherSearch