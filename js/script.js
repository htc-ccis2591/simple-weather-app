$(function () {

    var weatherKey = "";



    $("#submit").on("click", function () {
        //get API key if present
        if (weatherKey === "") {
            weatherKey = $("#apikey").val();

        }

        if (weatherKey !== "") {
            $('#api-div').hide();
        }


        var zipCode = $('#zip').val();
        $("#zip").val("");

        console.log(zipCode);

        $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&units=imperial&APPID=" + weatherKey, function (data) {

            console.log("wooo");
            console.log(data.main.temp);

            var temperature = data.main.temp;
            var description = data.weather[0].description;
            var name = data.name;
            var tempMin = data.main.temp_min;
            var tempMax = data.main.temp_max;
            var pressure = data.main.pressure;
            var windspeed = data.wind.speed;





            console.log(description);
            console.log(name);





            var header = $('<h2>' + 'Current Weather description and summary for: ' + name + '</h2>');

            var descriptionP = $('<p>' + 'Description: ' + description + '<br>' + '</br>' + 'Weather Summary: ' + 'Min Temp: ' +
                tempMin + 'F, ' + ' Current Temp: ' + temperature + 'F, ' + ' Max Temp: ' + tempMax + 'F' + ' Windspeed: ' + windspeed + 'MPH' + '</p>');

            var Tempheader = $('<h2>' + 'Current Weather temperature for: ' + name + '</h2>');

            var temperatureP = $('<p>' + temperature + ' degrees Fahrenheit' + '</p>');

            var br = $('<br>' + '</br>');

            $('#weather').append(header);
            $('#weather').append(descriptionP);
            $('#weather').append(Tempheader);
            $('#weather').append(temperatureP);
            $('#weather').append(br);




        });









    });


}());