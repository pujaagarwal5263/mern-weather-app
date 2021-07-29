const cityName= document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name= document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const getInfo= async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal == ""){
      city_name.innerText = "Please search city name";
    }else{
     try{
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=003d3b196b38e07e3a10172e9e8e476b`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData=[data];

        console.log(arrData[0].main.temp);
        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`; 
        const temperature=arrData[0].main.temp;
        temp.innerText = `${parseFloat(temperature-273.15).toPrecision(3)}℃`;

        const tempMood = arrData[0].weather[0].main;
        if(tempMood=="Clear"){
            temp_status.innerHTML ="<i class='fas fa-sun'></i>"
        }else if(tempMood=="Clouds"){
            temp_status.innerHTML ="<i class='fas fa-cloud'></i>"
        }else if(tempMood=="Rain"){
            temp_status.innerHTML ="<i class='fas fa-cloud-rain'></i>"
        }else{
            temp_status.innerHTML ="<i class='fas fa-cloud'></i>"
        }
    }
    catch{
        city_name.innerText = "Please enter the city name properly";
    }
    }
}

submitBtn.addEventListener('click',getInfo);