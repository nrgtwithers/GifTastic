// Create an Array of Topics : Horror Movies.
var topics = ["Psycho", "Halloween", "The Shining", "The Texas Chain Saw Massacre", "Rosemary's Baby", "Night of the Living Dead", "The Thing", "The Exorcist", "The Evil Dead", "Bride of Frankenstein", "House on Haunted Hill", "The Omen"];
// console.log(topics)
// Connect API key to create the query.
// Create a function that will create buttons.
function movieButtons() {
  // Empty the div
  $(".horror-movies").empty();
  // Create a loop from the list of arrays.
  for (var i = 0; i < topics.length; i++) {
    // Create the buttons
    var btn = $("<button>");
    btn.text(topics[i]);
    btn.addClass("scary");
    btn.addClass("btn btn-outline-danger");
    btn.attr("data-name", topics[i]);
    $(".horror-movies").append(btn);
    // console.log(btn)
  }
}
$("#add-horror-movie").on("click", function (event) {
  event.preventDefault();
  var userInput = $("#movie-input").val();
  topics.push(userInput);
  movieButtons();
});

//Display gifs

function displayMovies() {
  // alert("inside display");
   var movie_titles = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie_titles + "&api_key=Khb1ujj48KAfX8LotZZQX8bCJG8gasfB&limit=10";
      // console.log(queryURL); 

      $.ajax({
          url: queryURL,
          method: 'GET'
        }).done(function(response) {
          var results = response.data
          // $('#horror-gifs').text(JSON.stringify(response));
          // // console.log(response);
          console.log(results);
          $("#horror-gifs").empty();

          for (var i=0; i< results.length; i++ ){
              var movieDiv = $("<div class='test'>");
              $("#horror-gifs").css("background-color","black");
              var rating = results[i].rating;
              var p = $("<p>").text("Rating: " + rating);
              // p.css({color:"red", "backgroundColor:"white"}
              // console.log(results[i].rating);
              var movieImage = $("<img>");
              movieImage.attr("class", "gif")
              movieImage.attr("src", results[i].images.fixed_height_still.url)
              movieImage.attr("data-animate", results[i].images.fixed_height.url);
              movieImage.attr("data-still", results[i].images.fixed_height_still.url)
              movieImage.attr("data-state", "still")
              movieDiv.prepend(p);
              movieDiv.prepend(movieImage);
              $("#horror-gifs").prepend(movieDiv);
}
  });
 };

$(document).on("click", ".gif", function() {
  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");
  console.log(state);
  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
  // Then, set the image's data-state to animate
  // Else set src to the data-still value
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});

// Provide rating.
// Make gifs capable of starting and stopping by on click
// Create the ability for user to add additional Horror movies.
// Call functions to run
$(document).on("click", ".scary", displayMovies)
movieButtons();

