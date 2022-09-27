///DOM elements
var today = moment()
$("#currentDay").text(today.format("dddd MMM Do, YYYY"));
var saveButtons = document.querySelectorAll("#saveButton");


//Variables
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var hours = [
    "9am", moment().startOf('hour').fromNow(),
    "10am", moment().startOf('hour').fromNow(),
    "11am", moment().startOf('hour').fromNow(),
    "12pm", moment().startOf('hour').fromNow(),
    "1pm", moment().startOf('hour').fromNow(),
    "2pm", moment().startOf('hour').fromNow(),
    "3pm", moment().startOf('hour').fromNow(),
    "4pm", moment().startOf('hour').fromNow(),
    "5pm", moment().startOf('hour').fromNow(),
]
console.log(hours);

const hourArray = [
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm'
];

//Functions
localStorageFunctions();
//save function to local storage and retrieve to stay on page after refresh

function localStorageFunctions() {
   
        for (let i = 0; i < numbers.length;i++) {
            $("input")[i].value = localStorage.getItem("input" + String(i + 1)); 
        }
    }
    $("button").on("click", function (event) {
        event.preventDefault();

        for (let i = 0; i < numbers.length;i++) {
            localStorage.setItem("input" + String(i+1),$("input")[i].value)
        }});
    




//functionality for testing whether time has passed
//for loop to check time and compare to values in hours and color coding them
// function timeValid() {
//     var currentHour = moment().hours(); //Check current timeblock user is in and determines whether it's PAST PRESENT OR FUTURE
//     $(".time-block").each(function () {
//         var currentBlock = parseInt($(this).attr("id").split(" ")[0]);
//         if (currentBlock < currentHour) {
//             $(this).addClass("past");
//         } else if (currentBlock === currentHour) {
//             $(this).removeClass("past");
//             $(this).addClass("present");
//         } else {
//             $(this).removeClass("past");
//             $(this).removeClass("present");
//             $(this).addClass("future");
//         }
//     });
// }

