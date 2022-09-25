///DOM elements
var today = moment()
console.log(today.format("MMMM Do YYYY"))
$("#currentDay").text(today.format("MMM Do, YYYY"));
//Variables
var hours = [
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",   
]