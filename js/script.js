(function () {
    var weatherKey = "";
    $("#submit").on("click", function () {
        if (weatherKey === "") {
            weatherKey = $("#apikey").val();
            if (weatherKey !== "") {
                $("#api-div").hide();
            }
        }
        var zipCode = $("#zip").val();
        $("#zip").val("");
        console.log(zipCode);
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&units=imperial&APPID=" + weatherKey, function (data) {
            console.log("WOO-HOO");
            console.log(data.main.temp);
        });
    });

}());