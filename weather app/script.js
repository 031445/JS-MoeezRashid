let search = document.querySelector("#search")
let city = document.querySelector("#city")
let temp = document.querySelector("#temp")
let stat= document.querySelector("#stat")
let icon= document.querySelector("#icon")
let speed= document.querySelector("#speed")
let humi= document.querySelector("#humi")

function fetchData() {
 

    search.addEventListener("click", async ()=>{
        
        let cityName = city.value
        let curr_url =await fetch(`https://proxy.cors.sh/http://api.weatherapi.com/v1/current.json?key=%20664eee293c084b13b3e170204241409&q=${cityName}&aqi=no.json`)
        let response = await curr_url.json()
        let iconSrc = response.current.condition.icon
        let stat_Info = response.current.condition.text
        let temp_Info = response.current.temp_c
        let humi_value=response.current.humidity
        let speed_value=response.current.wind_kph
        speed.innerHTML=speed_value+ " km/h"
        humi.innerHTML=humi_value +" %rh"
        temp.innerHTML=temp_Info + "°C"
        stat.innerHTML = stat_Info
        icon.src = iconSrc
        console.log(cityName)
        console.log(iconSrc)
        console.log(response)
    })
}


fetchData()

