"use strict"

let end_date = new Date("Nov 30, 2023 13:14:20").getTime();
console.log(end_date);
let display_time = document.querySelectorAll(".time");


let count = setInterval(function(){
    let current_date = new  Date().getTime();
    let time_difference = end_date - current_date;

    let days = Math.floor(time_difference / 1000 / 60 / 60 / 24);
    let hours = Math.floor((time_difference / 1000 / 60 / 60) % 24);
    let minutes = Math.floor((time_difference / 1000 / 60) % 60);
    let seconds = Math.floor((time_difference / 1000) % 60);

    display_time[0].innerHTML = days;
    display_time[1].innerHTML = hours;
    display_time[2].innerHTML = minutes;
    display_time[3].innerHTML = seconds;

    if (time_difference < 0) {
        clearInterval(count)
        display_time[0].innerHTML = 0;
        display_time[1].innerHTML = 0;
        display_time[2].innerHTML = 0;
        display_time[3].innerHTML = 0;
    }
},1000)