var queries = ["mercedes","toyota","dodge","ford","bmw","chevrolet"];

function addCarGif() {
    var cars = $(this).attr("data-car")
    
    const ApiKey = "wi8d6WPTYvkY91FIp9R4RYf34YoXAHve";
    
    const queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + ApiKey + "&q=" + cars + "&limit=15&offset=0&rating=PG-13&lang=en";
    
    
    $.ajax({
        URL: queryURL,
        method: "GET"
    }).then(function(response) {

        var results = response.data;

        for (var i = 0; i < results.length; i++) {

            var carDiv = $("<div class='car'>");
            
            var pRating = $("<p>").text("Rating: " + results[i].rating);
            
            var carImage = $("<img>").attr('src', results[i].images.fixed_height.url);
    
            carDiv.append(pRating);
            carDiv.append(carImage);

            $("#gifs-here").prepend(carDiv);
        }

        
    })
};

function renderButton() {

$("#buttons-view").empty();

for (var i = 0; i < queries.length; i++) {

var a = $("<button>");

a.addClass("car-btn");

a.attr("data-car", queries[i]);

a.text(queries[i]);

const button2 = $("<button>").addClass("car-btn").attr('data-car', queries[i]).text(queries[i]);

$("#buttons-view").append(a);

  }
};



$("#run-search").on("click", function(event) {

event.preventDefault();

var carsInput = $("#car-input").val().trim();

queries.push(carsInput);

renderButton();

});

$(document).on("click", ".car-btn", addCarGif);

renderButton();