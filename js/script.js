$(function () {

	var weatherKey = "";

	$("#submit").on("click", function () {

		if (weatherKey === "") {
			weatherKey = $("#apikey").val();
			if (weatherKey !== "") {
				$("#api-div").hide();
			}
			//console.log(weatherKey);
		}
		var zipCode = $("#zip").val();
		$("#zip").val("");
		console.log(zipCode);

		$.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&units=imperial&APPID=" + weatherKey, function (data) {
			var $newData = ("<section id= 'weather' '<br><p>The Temperature in " + data.name + " is " + data.main.temp + "° Fahrenheit</p>")
			var icon = ("http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
			$("#weather").replaceWith($newData);
			$("p").append(" with " + data.weather[0].description + ". ");

			$("p").append($("<a>", {
				href: "#",
				html: $("<img>", {
					src: icon
				})

			}));

		});
		$("input").focus();
	});

});



//xhr requests are json requests

//console.log(apikey);