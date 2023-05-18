const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=-34.61&longitude=-58.37&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"

async function obtenerTemperatura(){
    try{
        const response = await fetch(apiUrl)
        const data = await response.json()

        console.log("Data de la Api:", data.current_weather.temperature
        );
        document.getElementById("#temp").innerHTML = data.current_weather.temperature
        document.getElementById("#viento").innerHTML = data.current_weather.windspeed
    
    }
    catch(error) {console.log('Ocurrió un error grave', error)}

}

obtenerTemperatura()