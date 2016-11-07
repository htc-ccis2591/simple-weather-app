$(document).ready(function() {
   
   var weatherkey = ""; 
    
    $('#submit').click(function(){
        
        //Get the API key if it is present
        
    if(weatherkey === ""){
           weatherkey = $('#apikey').val();
        if (weatherkey !== ""){
            $("#api-div").hide();
        }
       }
  
        
    var zipCode = $('#zip').val();
    $('#zip').val("");
    
    //This JSON call gets the current name of the city by Zipcode, and the current weather in fahrenheit.
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&units=imperial&APPID=" + weatherkey, function(data){
        var myWeather = "The weather in " + data.name + " " + "is" + " " + data.weather[0].description.toLowerCase() + " " + "with the current temperature being" + " " + data.main.temp + " " + "degrees fahrenheit.";
        console.log(myWeather);
        $('section').next().html('<label>' + myWeather + '</label>');
    });
        
  });

});