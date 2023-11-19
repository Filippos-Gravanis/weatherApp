
async function getCurrentWeather(city){
let weather = await fetch("http://api.weatherapi.com/v1/current.json?key=77f41ca5212f43d0a46222731231811 &q=larisa&aqi=no",{mode:"cors"})
let jsonWeather = await  weather.json()
return jsonWeather
}


async function weatherCard(weatherInfo){
    const weather =  await weatherInfo()
    console.log(weather);
    const content = document.querySelector('.content')
    
    const countryName = document.createElement('p')
    countryName.textContent = weather.location.country
    
    const cityName = document.createElement('p')
    cityName.textContent = weather.location.name
    
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('cardContainer')
    cardContainer.appendChild(cityName)
    cardContainer.appendChild(countryName)
    
    content.appendChild(cardContainer)

}

weatherCard(getCurrentWeather)


async function inputControl(weatherInfo){
    const inputElement = document.querySelector('input')
    inputElement.addEventListener('keydown',async (ev)=>{
        if (ev.key=="Enter"){
            if (inputElement.value!=""){
                weatherCard(weatherInfo)

            }
        }
    })
}

inputControl()