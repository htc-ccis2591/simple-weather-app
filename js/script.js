$(function () {

    var $weatherSection = $("#weather");
    var weatherKey = "";
    var zipCode;

    //--Button Click Event--//
    $("#submit").on("click", function () {
        //--Clear Weather Section--//
        $weatherSection.empty();

        //--Get API Key--//
        if (weatherKey === "") {
            weatherKey = $("#apikey").val();
            if (weatherKey !== "") {
                $("#api-div").hide();
            };
        };

        //--Set Zipcode--//
        zipCode = $("#zip").val();

        //        console.log(weatherKey);
        //        console.log(zipCode);

        //--jSON--//
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&units=imperial&APPID=" + weatherKey, function (data) {


            //In Develop Tools > Network > XHR
            var city = data.name;
            var temp = data.main.temp;
            var weather = data.weather[0].main;
            var description = data.weather[0].description;

            //            console.log(data.name); //--City
            //            console.log(data.main.temp); //--Temp
            //            console.log(data.weather[0].main); //--Weather
            //            console.log(data.weather[0].description); //--Weather Description

            $weatherSection.append("City: " + city + "<br>" + "Temperature(Fahrenheit): " + temp + "<br>" + "Weather: " + weather + "<br>" + "Description: " + description + "<br><br>");
        });
    });


});