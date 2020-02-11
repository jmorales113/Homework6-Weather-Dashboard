const APILink = "https://api.openweathermap.org/data/2.5/weather?q="
const APIKey = "&appid=21f978b6bfc1044800d6bb1cea63c167"
var fiveDayForcastDisplay;
const forecastLink = "https://api.openweathermap.org/data/2.5/forecast?q="

$("#citySearch").on("click", function(){
    var city = $("#city").val()
    var queryURL = APILink + city + APIKey
    var queryURL2 = forecastLink + city + APIKey
    var lat
    var lon
    

    $.ajax({
        url : queryURL,
        method: "GET",

    }).then(function(response){
    console.log(response)
    })

})
