const cityName=document.getElementById('cityName')
const submitBtn=document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');
const tempdegree=document.getElementById('tempdegree');
const datahide=document.querySelector('.middle_layer');
const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
         city_name.innerText=`Pz Write the Name for Search`;
         datahide.classList.add('data_hide');
    }
    else{
        try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a0ee563f31cf879ea92771a9e00c9071`;
    const response=await fetch(url);
    const data=await response.json();
    const arrData=[data];
    city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
    tempdegree.innerText=arrData[0].main.temp;
    
    const tempMood = arrData[0].weather[0].main;

    if(tempMood=="Sunny"){
        temp_status.innerHTML="<i class='fas fa-sun' style='color: rgba(255, 166, 0, 0.973);'></i>";
       }else if(tempMood=="Clouds"){
         temp_status.innerHTML="<i class='fas fa-cloud' style='color:#dfe4ea; '></i>";
       }else if(tempMood=="Rainy"){
         temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be; '></i>";
       }else{
         temp_status.innerHTML="<i class='fas fa-cloud' style='color:#44crde; '></i>";
       }
       datahide.classList.remove('data_hide');
}
        catch{
            city_name.innerText=`Plz enter proper city name `;
            datahide.classList.add('data_hide');
        }
    }
    }
    
    
submitBtn.addEventListener("click",getInfo);