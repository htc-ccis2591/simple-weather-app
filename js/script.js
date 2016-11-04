$(function () {

	var weatherKey = "";


	$("#submit").on("click", function () {

		if (weatherKey === "") {
			weatherKey = $("#apikey").val();
			if (weatherKey !== "") {
				$("#api-div").hide();
			}
			console.log(weatherKey);
			console.log("yes!");

		}
		var zipCode = $("#zip").val();
		$("#zip").val("");
		console.log(zipCode);

		// 31fe6ed8278fc00664a13d6ab4651af3

		$.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&units=imperial&APPID=" + weatherKey, function (data) {
			var $newData = ("<section id= 'weather' '<p>The Temperature in " + data.name + " is " + data.main.temp + "° fahrenheit.</p>")
			$("#weather").replaceWith(function (n) {
				return ($newData);
			});
			//if ("#weather" !== "") {
			//("#weather").replaceWith($newData);
			console.log(data.main.temp);


			//city, description (in array)

			//< section id = weather > +

			//$("#weather").clear();

			//("<section id= weather" + '<p>The Temperature in ' + data.name + " is " + data.main.temp + "° farenheit.</p>")
			//name weather[0]


		});



	});





	console.log("hello");


});

// 31fe6ed8278fc00664a13d6ab4651af3

//xhr requests are json requests

//console.log(apikey);