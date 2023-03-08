let place_name="new delhi";
// let key="91edd4aa71be7da5b2b8b08235313c08";
let key="628eaf676af4022bef1cb9a6055e282c";

function func() {
    let place = document.getElementById("searcher");
    place_name = place.value;
    console.log(place_name);
    fetchWeather();
  }

async function fetchWeather(){
    let url= "https://api.openweathermap.org/data/2.5/weather?q="+place_name+"&appid"+ key + "&units=metric";
    const res= await fetch(url);
    const data = await res.json();
    const {name}= data;
    const {temp} =data.main;
    document.getElementById("Weatherin").innerHTML="Weather in "+ name;
    document.getElementById("Temp").innerHTML=temp+"*C";
}
fetchWeather();
