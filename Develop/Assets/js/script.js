///DOM elements
var today = moment()
console.log(today.format("MMMM Do YYYY"))
$("#currentDay").text(today.format("MMM Do, YYYY"));
var saveButtons = document.querySelectorAll("#saveButton");


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
// Manipulate items in an array
// Map vs For Each vs For Loop
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

// Map
const arrayMadeWithMap = hourArray.map(item => ` ${item}`);

// For Each
const arrayMadeWithForEach = [];
hourArray.forEach(item => arrayMadeWithForEach.push(` ${item}`));

// For Loop
const arrayMadeWithForLoop = [];
for (i=0; i < hourArray.length; i++) {
    arrayMadeWithForLoop.push(` ${hourArray[i]}`);
}

// The results for each are the same!
console.log(arrayMadeWithMap);
console.log(arrayMadeWithForEach);
console.log(arrayMadeWithForLoop);

//Functions
//save function to local storage
// function saveEvent() {
//     var events = document.querySelector("event").value;
//     var scores = JSON.parse(localStorage.getItem(events));
//     console.log(scores);
//     if (events) {
//       events.push(currentEvents);
//       localStorage.setItem(event, JSON.stringify(events));
//     } else {
//       localStorage.setItem(events, JSON.stringify([currentEvents]));
//     }
    //     events = JSON.parse(localStorage.getItem(events));
    //     var h2 = document.querySelector(".events");
    //     var eventsEl = document.querySelector(".events");
    //     for (var i = 0; i < events.length; i++) {
    //     var li = document.createElement("li")
    //     li.textContent = events[i];
    //     eventsEl.appendChild(li);
    //     }
    // }

    //This function gets the current events
// function events() {
//     var eventText = document.querySelector("#event");
//     eventText.textContent = currentEvents;
//   }


//functionality for testing whether time has passed
//for loop to check time and compare to values in hours and color coding them
//function on page load all saved events are still displayed

//Event listeners
//save button on click get text from text area and push to local storage and put that in text box for that row and hour