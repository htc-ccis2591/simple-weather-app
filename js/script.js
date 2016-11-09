$(function () {
    //6a0c8967e09cc17625d2caec056b907b
	var weatherKey = "";
    var city = "";
    var country = "";
    var min_temp = "";
    var max_temp = "";
    var pressure = "";
    var desc = "";
	
    $("#submit").on("click", function () {
		//Get the API key if present
		if (weatherKey === "") {
			weatherKey = $("#apikey").val();
			if (weatherKey !== "") {
				$("#api-div").hide();
			}
		}
        $("#weather").empty(); 
		
		var zipCode = $("#zip").val();
		$("#zip").val("");
		
		$.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&units=imperial&APPID=" + weatherKey, function (data) {
            $("#weather").append('<div id="description"></div>');
            $("#description").append('<p>'+ data.name + ', ' + data.sys.country + ' <img src="http://openweathermap.org/img/w/' + data.weather[0].icon +'.png"></img></p>');
            $("#description").append('<p>Temperature from '+ data.main.temp_min + ' to ' + data.main.temp_max + '</p>');
            $("#description").append('<p>Pressure: '+ data.main.pressure +' hpa</p>');
            $("#description").append('<p>Description: '+ data.weather[0].description + '</p>');
            
		});
	});
});