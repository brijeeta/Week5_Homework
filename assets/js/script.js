var header = $('.jumbotron');
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
header.append(today);