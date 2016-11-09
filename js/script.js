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






                        console.log(description);
                        console.log(name);





                        var header = $('<h2>' + 'Current Weather description and temperature for: ' + name + '</h2>');

                        var descriptionP = $('<p>' + 'Current Weather Description: ' + description + '<br>' + '</br>' + ' Current Temp: ' + temperature + '</p>');

                        var Tempheader = $('<h2>' + 'Current Weather temperature for: ' + name + '</h2>');


                        var br = $('<br>' + '</br>');

                        $('#weather').append(header);
                        $('#weather').append(descriptionP);




                });









        });


}());