
//selector variable
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var coord = document.querySelector('#lon')
var lat = document.querySelector('#lat')
var country = document.querySelector('#country')
var dt1 = document.querySelector('#date1')
var dt2 = document.querySelector('#date2')
var dt3 = document.querySelector('#date3')
var day_temp = document.querySelector('#day1')
var night_temp = document.querySelector('#night1')
var day_temp2 = document.querySelector('#day2')
var night_temp2 = document.querySelector('#night2')
var day_temp3 = document.querySelector('#day3')
var night_temp3= document.querySelector('#night3')




apik = "534b1f3a5ffa01b0ae1dae9fad0f07ea"
apik2 = "9fec87db6610ed3546ac7c79b5064019"
//kelvin to celsius
function convertion(val){
    return (val - 273).toFixed(2)
}



//fetch
    btn.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())
        .then()
         //.then(data => console.log(data))
        .then(data => {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            //console.log(descrip)
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']
            var longitude = data['coord']['lon']
            var latitude = data['coord']['lat']
            var country1=data['sys']['country']

            city.innerHTML=`City: ${nameval}`
            temp.innerHTML = `Temperature: ${ convertion(tempature)} C`
            description.innerHTML = `Conditions: ${descrip}`
            wind.innerHTML = `Wind Speed: ${wndspd} km/h`
            lon.innerHTML= `Longitude: ${longitude} `
            country.innerHTML = `Country: ${country1}`
            lat.innerHTML= `Latitude: ${latitude}`
        
            
            fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&exclude=hourly,minutely,alerts&units=metric&appid='+apik2)   
            .then(rez => rez.json())
        .then(data => {
            
            var datee_2 = data['daily']['1']['dt']
            var datee_1 = data['daily']['2']['dt']
            var datee_3 = data['daily']['3']['dt']
           var temp1 = data['daily']['1']['temp']['day']
           var temp_1 = data['daily']['1']['temp']['night']
           var temp2 = data['daily']['2']['temp']['day']
           var temp_2 = data['daily']['2']['temp']['night']
           var temp3 = data['daily']['3']['temp']['day']
           var temp_3 = data['daily']['3']['temp']['night']

           var date_1 = new Date(datee_1* 1000).toLocaleDateString("en-US");
            var date_2 = new Date(datee_2* 1000).toLocaleDateString("en-US");
            var date_3 = new Date(datee_3* 1000).toLocaleDateString("en-US");
            

           date1.innerHTML=`${date_1} C`
           day1.innerHTML= `Day Temperature: ${temp1} C`
           night1.innerHTML= `Night Temperature: ${temp_1} C`

           date2.innerHTML=`${date_2}`
           day2.innerHTML= `Day Temperature: ${temp2} C`
           night2.innerHTML= `Night Temperature: ${temp_2} C`

           date3.innerHTML=`${date_3}`
           day3.innerHTML= `Day Temperature: ${temp3} C`
           night3.innerHTML= `Night Temperature: ${temp_3} C`

           
        })       
        
    })
    
        .catch(err => alert('You entered Wrong city name'))
        
    })
    
  