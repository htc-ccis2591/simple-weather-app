$(function () {
    
	var weatherKey = "";
	
    $("#submit").on("click", function () {
		//Get the API key if present
		if (weatherKey === "") {
			weatherKey = $("#apikey").val();
			if (weatherKey !== "") {
				$("#api-div").hide();
			}
		}
		
		var zipCode = $("#zip").val();
		$("#zip").val("");
		
		$.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&units=imperial&APPID=" + weatherKey, function (data) {
			console.log("wooo");
			console.log(data.main.temp);
		});
	});
});