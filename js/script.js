$(function() {
    
    //var weatherKey = "56d21ab2bb47d4a0b49b93f58aaed1da";
    var weatherKey;
    
    $("#submit").on("click",function(){
        //Get the API key if present
        
        if (weatherKey!==""); {
            weatherKey=$("#apikey").val();
            $("api-div").hide();
        }
        var apikey = $("#apikey").val();
        var zipCode = "";
        zipCode = $("#zip").val();
        
        var weatherurl = "http://api.openweathermap.org/data/2.5/weather?zip="+zipCode+",us&units=imperial&APPID="+apikey
        $.getJSON(weatherurl, function(data){
            //var response = "";
            //console.log("It worked");
            //var returnedData = JSON.parse(response);
            console.log("whoo whoo");
            console.log(data.main.temp);
            console.log(data.weather[0].description);
            $("#weather h1" ).remove();
            $("#weather").append("<h1>In the city of " + data.name + ":");
            $("#weather").append("<h1>Current temperature: "+data.main.temp+" degrees Farenheit");
            $("#weather").append("<h1>Current weather conditions: " + data.weather[0].description);
        });
        
    })
   
    
    

    
    
});