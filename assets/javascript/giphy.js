   
  
    $("button").on("click", function() {
       
           var person = $(this).attr("data-person");
        

        // Giphy search
           var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=dc6zaTOxFJmzC&limit=5";

        // AJAX GET request
          $.ajax({
            url: queryURL,
            method: "GET"
          })

          
           .done(function(response) {
            
              var results = response.data;

          // Results loop
                for (var i = 0; i < results.length; i++) {

              // Only taking action if the photo has an appropriate rating
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

              var gifDiv = $("<div class='item'>");

              var personImage = $("<img>");
          
              var rating = results[i].rating;
              var stillGif = results[i].images.fixed_height_still.url;
              var animatedGif = results[i].images.fixed_height.url;

              personImage.attr("src", results[i].images.fixed_height_still.url);

              personImage.attr("data-still-", stillGif);

              personImage.attr("data-still", results[i].images.fixed_height_still.url);

              personImage.attr("data-animate", results[i].images.fixed_height.url);

                            
              var stillGif = results[i].images.fixed_height_still.url;
          
              var animatedGif = results[i].images.fixed_height.url;
              
              var p = $("<p>").text("Rating: " + rating);

              gifDiv.append(p);
              gifDiv.append(personImage);

                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
        $("#gifs-appear-here").prepend(gifDiv);
          
              }
            }
          
   });

  });

