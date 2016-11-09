$(function () {

    //c5d0500c3bda136b5b24ab20d6372d72
    var weatherKey = "";
    $("#submit").on("click", function () {
        if (weatherKey === "") {
            weatherKey = $("#apikey").val();
            if (weatherKey !== "") {
                //$("#apidiv").hide();
            }
        }
        var zipCode = $("#zip").val();
        $("#zip").val("")

        $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode +
            ",us&units=imperial&APPID=" + weatherKey,
            function (data) {
                $("#weather").append("<br>It is " + data.main.temp + " degrees Fahrenheit in " + data.name + " with " + data.weather.description + ".");
            });
    });
});