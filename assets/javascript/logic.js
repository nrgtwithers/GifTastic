// Create an Array of Topics : Horror Movies.
var topics = ["Psycho", "Halloween", "The Shining", "The Texas Chain Saw Massacre", "Rosemary's Baby", "Night of the Living Dead","The Thing", "The Exorcist", "The Evil Dead", "Bride of Frankenstein", "House on Haunted Hill", "The Omen"];
console.log(topics)
// Connect API key to create the query.
// Create a function that will create buttons.
function movieButtons() {
// Empty the div
$(".horror-movies").empty();
 // Create a loop from the list of arrays.
 for(var i=0; i<topics.length; i++){
// Create the buttons
    var btn = $("<button>");
    btn.text(topics[i]);
    $(".horror-movies").append(btn);
 }   
}
$("#add-horror-movie").on("click", function(event) {
    event.preventDefault();
    var userInput = $("#movie-input").val();
    topics.push(userInput);
    movieButtons();
  });

// Provide rating.
// Make gifs capable of starting and stopping by on click
// Create the ability for user to add additional Horror movies.
// Call functions to run
movieButtons();
// DOM / Onclick