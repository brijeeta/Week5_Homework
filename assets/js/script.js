var allHours = $('.time-block');
var header = $('.jumbotron');
var today = moment();
var currentDay = $("#currentDay");

//  set the current day on the header 
currentDay.text(today.format("MMM Do, YYYY"));
header.append(today);

setBkgrndColor();

// Clear Planner
function clearStorage() {
    localStorage.clear();
    loadPlanner();
}
// Set background colors based on current time ( current- red, past-grey, future - green)
function setBGColor() {}

// Load local storage on load
function loadPlanner() {};