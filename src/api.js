import axios from 'axios'
// import dotenv from 'dotenv'
// dotenv.config();

const apiKey = "AIzaSyAtDRhVstWbo-YnbnO6h64LyxFr0GOridg";

export const fetchWeatherData = async (address) => {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`);
        if (response) {
            var location = response.data.results[0].geometry.location

        }
    } catch (error) {
        console.error(error)
        return ('Erro ao buscar o endereço, tente um endereço válido')
    };
    if (location) {
        try {
            const responseForecast = await axios.get(
                `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lng}&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max&current_weather=true&timezone=America%2FSao_Paulo`
            )
            let response = responseForecast.data
            return response
        } catch (error) {
            console.error(error)
            return ('Erro na api de previsão do tempo, verifique a conexão')
        }
    }

}

