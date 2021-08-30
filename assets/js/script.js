// variabes used
var allHours = $('.time-block');
var header = $('.jumbotron');
var today = moment();
var currentDay = $("#currentDay");
var currentHour;
var targetDiv;
var storageDiv;

//  set the current day on the header 
currentDay.text(today.format("MMM Do, YYYY"));
header.append(today);
// sets the backgroundcolor
setBGColor();

// sets the current hour and updates textarea background colors every minute
setInterval(setBGColor, 60000);

// Set background colors based on current time ( current- red, past-grey, future - green)
function setBGColor() {

    for (i = 0; i < allHours.length; i++) {
        // finds the current hour in 24hours format
        currentHour = moment().format('H');
        console.log(currentHour);
        // finds the data-block attribute
        var currentDiv = allHours[i].getAttribute("data-block");
        targetDiv = $(allHours[i]);

        console.log(currentDiv);
        console.log(targetDiv);

        // past
        if (currentDiv < currentHour) {
            // target each div and add class "past" to set grey color BG
            targetDiv.find("textarea").addClass("past").removeClass("present future");
        }
        // present
        if (currentDiv == currentHour) {
            // target each div and add class "present" to set red color BG
            targetDiv.find("textarea").addClass("present").removeClass("past future");
        }
        // future
        if (currentDiv > currentHour) {
            // target each div and add class "future" to set green color BG
            targetDiv.find("textarea").addClass("future").removeClass("past present");
        }
    }
}

// event listner for click button
$(".saveBtn").on("click", function(event) {
    // local variable grabs the user input as a string and logs it to the console
    var hourDiv = event.target.parentElement.children[0].value;
    console.log(hourDiv);
    // sends user input data to local storage with the data attribute as the key
    localStorage.setItem(event.target.parentElement.parentElement.getAttribute("data-block"), hourDiv);
});



loadPlanner();

// Load local storage on refresh page or page load
function loadPlanner() {

    for (i = 0; i < allHours.length; i++) {
        // grabs data attribute and assigns to a local variable
        var currentDiv = allHours[i].getAttribute("data-block");
        console.log(currentDiv);
        storageDiv = $(allHours[i]);
        // pulls value from local storage depending on data attribute
        var currentTask = localStorage.getItem(currentDiv);
        console.log(currentTask);
        storageDiv.find("textarea").val(currentTask);
    };
};