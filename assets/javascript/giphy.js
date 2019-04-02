var queries = ["mercedes","toyota","dodge","ford","bmw","chevrolet"];

function addCarGif() {
    var cars = $(this).attr("data-name")
    
    const ApiKey = "wi8d6WPTYvkY91FIp9R4RYf34YoXAHve";
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + ApiKey + "&q=" + cars + "&limit=15&offset=0&rating=PG-13&lang=en";
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        console.log(queryURL);
        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {

            var carDiv = $("<div class='car'>");
            
            var pRating = $("<p>").text("Rating: " + results[i].rating);
            
            var carImage = $("<img>").attr('src', results[i].images.fixed_height.url);
    
            carDiv.append(pRating);
            carDiv.append(carImage);

            $("#gifs-here").prepend(carDiv);
        }

        
    });
};


 function renderButton() {

 $("#buttons-view").empty();

 for (var i = 0; i < queries.length; i++) {

 var a = $("<button>");

 a.addClass("car-btn");

 a.attr("data-name", queries[i]);

 a.text(queries[i]);

 const button2 = $("<button>").addClass("car-btn").attr('data-name', queries[i]).text(queries[i]);

 $("#buttons-view").append(a);

   }
 };



 $("#run-search").on("click", function(event) {

 event.preventDefault();

 var cars = $("#car-input").val().trim();

 queries.push(cars);

 renderButton();

 });

  $(document).on("click", ".car-btn", addCarGif);

  renderButton();