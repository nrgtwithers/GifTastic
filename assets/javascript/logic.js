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
    btn.addClass("movie_titles");
    btn.addClass("btn btn-danger");
    btn.attr("data-name",topics[i]);
    $(".horror-movies").append(btn);
 }   
}
$("#add-horror-movie").on("click", function(event) {
    event.preventDefault();
    var userInput = $("#movie-input").val();
    topics.push(userInput);
    movieButtons();
  });               
//Display gifs
function displayGifs(){
    var movie_titles = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie_titles + "&api_key=Khb1ujj48KAfX8LotZZQX8bCJG8gasfB&limit=10";
    console.log(queryURL); 
    $.ajax({
        url: queryURL,
        method: 'GET'
      }).then(function(response) {
        console.log(response);
        $('#gifoptions').text(JSON.stringify(response));
      });
      }

// Provide rating.
// Make gifs capable of starting and stopping by on click
// Create the ability for user to add additional Horror movies.
// Call functions to run
movieButtons();
displayGifs();
