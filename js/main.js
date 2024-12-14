"use strict";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let month = months[d.getMonth()];
let day1 = days[d.getDay()];
let day2 =(d.getDay()>5)? days[0]:days[d.getDay()+1];
let day3;
if (d.getDay()===5){
    day3=days[0];
}else if(d.getDay()===6){
    day3=days[1];
}else{
    day3=days[d.getDay()+2];
}
document.getElementById("day1").innerHTML=day1;
document.getElementById("day2").innerHTML=day2;
document.getElementById("day3").innerHTML=day3;

document.getElementById("date").innerHTML=d.getDate()+month;

const search = document.getElementById("search");

function getWeather(city){
    fetch(`https://api.weatherapi.com/v1/current.json?key=b67a3c39816f47e3b63124734241412&q=${city}`)
    .then(function(data){return data.json()})
    .then(function(data){
        document.getElementById("city").innerHTML = data.location.name;
        document.getElementById("deg1").innerHTML = data.current.temp_c+"°C";
        document.getElementById("status1").src = `https:${data.current.condition.icon}`;
        document.getElementById("skyStatus1").innerHTML = data.current.condition.text;
    })
    .catch(function(){console.log("error")});
    
}

getWeather("Cairo");
search.addEventListener("keyup" , function(){
    getWeather(search.value);
})

