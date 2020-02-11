const APILink = "https://api.openweathermap.org/data/2.5/weather?q="
const APIKey = "&appid=21f978b6bfc1044800d6bb1cea63c167"
var fiveDayForcastDisplay;
const forecastLink = "https://api.openweathermap.org/data/2.5/forecast?q="
$("#currentDayBox").hide()
$("#foreCastDisplay").hide()

$("#citySearch").on("click", function(){
    var city = $("#city").val()
    var queryURL = APILink + city + APIKey
    var queryURL2 = forecastLink + city + APIKey
    var lat
    var lon
    

$.ajax({
    url: queryURL,
    method: "GET",

    }).then(function(response){
    console.log(response);
    $("#currentDayBox").show()
    $("#foreCastDisplay").show()
    $("#currentCity").text(response.name + " " + moment().format('MMMM Do YYYY'))
    var icon = response.weather[0].icon
    var iconURL = "http://openweathermap.org/img/w/" + icon + ".png"
    $("#icon").attr("src", iconURL)
    var currentTempeature = response.main.temp * (9/5) - 459.67
    $("#currentTemperature").text(("Temperature: " + currentTempeature.toFixed(1) + " °F"))
    $("#currentHumidity").text("Humidity: " + response.main.humidity + "%")
    $("#currentWind").text("Wind Speed: " + response.wind.speed + " MPH")
    

    var APILink2 = "http://api.openweathermap.org/data/2.5/uvi/forecast?&appid=3c34658c8e0e9fdb71064b81293a3704&lat="
    lat = response.coord.lat
    lon = response.coord.lon
    queryURL3 = APILink2 + lat + "&lon=" + lon
    
    $.ajax({
        url: queryURL3,
        method: "Get"

    }).then(function(response){
        $("#currentUV").text("UV Index: " + response[0].value)
    })


})
})