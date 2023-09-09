//read
const button = document.getElementById('cityBtn');
const input = document.getElementById('cityName');
//update
const cityLoc = document.getElementById('location');
const time = document.getElementById('locTime');
const temp = document.getElementById('locTemp');

async function getData(city){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=8001e73922a34fe8aa545512230909&q=${city}&aqi=yes
    `);
    return await promise.json();
}

button.addEventListener('click' , async () =>{
    let city = input.value;
    const result = await getData(city)
    cityLoc.innerText = `${result.location.name} , ${result.location.region} , ${result.location.country}`;
    time.innerText = `${result.location.localtime}`;
    temp.innerText = `${result.current.temp_c}`;
});