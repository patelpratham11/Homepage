urlOne = "https://api.openweathermap.org/data/2.5/weather?lat=40.4406&lon=-79.9959&appid=23f7b63fd1c1d1a3b0dc5b97fc5c66af&units=imperial";
urlTwo = "https://api.openweathermap.org/data/2.5/weather?lat=40.0065&lon=-75.7033&appid=23f7b63fd1c1d1a3b0dc5b97fc5c66af&units=imperial";
apiOne();
apiTwo();
function apiOne(){
  fetch(urlOne).then(response => response.json()).then(data => {
    var name = data['name'];
    var min = data['main']['temp_min'];
    var max = data['main']['temp_max'];
    var feels = data['main']['feels_like'];
    var wind = data['wind']['speed'];
    var rain = data['weather']['0']['main']
    console.log(data);
    document.getElementById('nameOne').innerHTML = name;
    document.getElementById('lowOne').innerHTML = "Low: "+min + " F";
    document.getElementById('highOne').innerHTML = "High: "+max + " F";
    document.getElementById('feelslikeOne').innerHTML = "Feels Like: "+feels + " F";
    if(rain == "Rain"||rain == "Mist"||rain == "Thunderstorm"||rain == "Drizzle"){
      document.getElementById("rainOne").style.color = "white";
    }
    else if(feels>=70|| rain =="Clear"){
      document.getElementById("sunOne").style.color = "white";
    }
    else if(rain == "Clouds"){
      document.getElementById("cloudOne").style.color = "white";
    }
    else if(wind>9){
      document.getElementById("windOne").style.color = "white";
    }
    else if(rain == "Snow"){
      document.getElementById("snowOne").style.color = "white";
    }
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    if(hour == 23 && minute == 59){
      document.getElementById("sunOne").style.color = "#2e2e33";
      document.getElementById("rainOne").style.color = "#2e2e33";
      document.getElementById("cloudOne").style.color = "#2e2e33";
      document.getElementById("windOne").style.color = "#2e2e33";
      document.getElementById("snowOne").style.color = "#2e2e33";
      apiOne();
    }
  } );
}

function apiTwo(){

  fetch(urlTwo).then(response => response.json()).then(data => {
    var name = data['name'];
    var min = data['main']['temp_min'];
    var max = data['main']['temp_max'];
    var feels = data['main']['feels_like'];
    var wind = data['wind']['speed'];
    var rain = data['weather']['0']['main'];
    var icon = data['weather']['0']['icon'];

    console.log(data);
    document.getElementById('nameTwo').innerHTML = name;
    document.getElementById('lowTwo').innerHTML = "Low: "+min + " F";
    document.getElementById('highTwo').innerHTML = "High: "+max + " F";
    document.getElementById('feelslikeTwo').innerHTML = "Feels Like: "+feels + " F";


    if(rain === "Rain"||rain == "Mist"||rain == "Thunderstorm"||rain == "Drizzle"){
      document.getElementById("rainTwo").style.color = "white";
    }
    else if(feels>=70|| rain =="Clear"){
      document.getElementById("sunTwo").style.color = "white";
    }
    else if(rain == "Clouds"){
      document.getElementById("cloudTwo").style.color = "white";
    }
    else if(wind>9){
      document.getElementById("windTwo").style.color = "white";
    }
    else if(rain == "Snow"){
      document.getElementById("snowTwo").style.color = "white";
    }



    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();


    if(hour == 23 && minute == 59){
      document.getElementById("sunTwo").style.color = "#2e2e33";
      document.getElementById("rainTwo").style.color = "#2e2e33";
      document.getElementById("cloudTwo").style.color = "#2e2e33";
      document.getElementById("windTwo").style.color = "#2e2e33";
      document.getElementById("snowTwo").style.color = "#2e2e33";
      apiTwo();


    }

  } );
}
