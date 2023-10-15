import axios from 'axios'

const GEOCODE_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json'
const FORECAST_API_URL = 'https://api.open-meteo.com/v1/forecast'

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

console.log(API_KEY)

/**
 * Busca o endereço e retorna informações sobre a previsão do tempo
 * @param {string} address - Endereço a ser buscado
 * @returns {Promise<Object>} - Informações sobre a previsão do tempo
 */
export const fetchWeatherData = async (address) => {
    let geocodeResult = {}
    console.log(address)
    try {
        const geocodeResponse = await axios.get(`${GEOCODE_API_URL}?address=${address}&key=${API_KEY}`)

        if (geocodeResponse) {
            console.log(geocodeResponse)
            geocodeResult = geocodeResponse.data.results[0].geometry.location
        }
    } catch (error) {
        console.error(error)
        return 'Erro ao buscar o endereço, tente um endereço válido'
    }

    try {
        const forecastResponse = await axios.get(`${FORECAST_API_URL}?latitude=${geocodeResult.lat}&longitude=${geocodeResult.lng}&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&current_weather=true&timezone=America%2FSao_Paulo`)

        const forecastResult = forecastResponse.data
        forecastResult.addressResult = geocodeResult

        console.log(forecastResult)

        return forecastResult
    } catch (error) {
        console.error(error)
        return 'Erro na api de previsão do tempo, verifique a conexão'
    }
}