
function getSavedCity(){
    if (!localStorage.getItem('city')){
        return ""
    } 
    return localStorage.getItem('city')
    
}
function setSavedCity(newCity){
    localStorage.setItem('city',newCity)
}


async function getCurrentWeather(city){
    let weather = await fetch("http://api.weatherapi.com/v1/current.json?key=77f41ca5212f43d0a46222731231811 &q="+city+"&aqi=no",{mode:"cors"})
let jsonWeather = await  weather.json()
return jsonWeather
}


async function weatherCard(weatherInfo){
    console.log(weatherInfo);
    const weather =  await getCurrentWeather(getSavedCity())
    console.log(weather);
    if (!weather.error){
    if (!document.querySelector('.cardContainer')){
    const content = document.querySelector('.content')
    
    
    const countryName = document.createElement('p')
    countryName.id = "cardCountryName"
    
    const cityName = document.createElement('p')
    cityName.id = "cardCityName"

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('cardContainer')
    cardContainer.appendChild(cityName)
    cardContainer.appendChild(countryName)
    
    content.appendChild(cardContainer)
    }
    document.querySelector('#cardCountryName').textContent = weather.location.country
    document.querySelector('#cardCityName').textContent = weather.location.name
}
else{
    alert("city not found")
}
}

weatherCard(getSavedCity())

async function inputControl(){
    const inputElement = document.querySelector('input')
    inputElement.addEventListener('keydown',async (ev)=>{
        if (ev.key=="Enter"){
            if (inputElement.value!=""){
                setSavedCity(inputElement.value)
                weatherCard(inputElement.value)
                inputElement.value = ""
            }
        }
    })
}

inputControl()