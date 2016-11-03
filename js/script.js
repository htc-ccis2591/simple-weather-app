$(function () {

    var weatherKey = "";

    $("#submit").on("click", function () {

        if (weatherKey === "") {
            weatherKey = $("#apikey").val();
            if (weatherKey !== "") {
                $("#api-div").hide();
            }
            console.log(weatherKey);
        }
        var zipCode = $("#zip").val();
        $("#zip").val("");
        console.log(zipCode);

        $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&units=imperial&APPID=" + weatherKey, function (data) {
            console.log("yes!");
            console.log(data.main.temp);
            //city, description (in array)

            $("#weather").append(data.main.temp);
            //name weather[0]


        });



    });





    console.log("hello");


});

// 31fe6ed8278fc00664a13d6ab4651af3

//xhr requests are json requests

//console.log(apikey);