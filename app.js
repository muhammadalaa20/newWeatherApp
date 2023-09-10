
function updateTime () {
  let date = new Date();
let hours= date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
const time = document.getElementById('time');
const date1 = document.getElementById('date');
time.innerHTML = hours+':'+minutes+':'+ seconds;
date1.innerHTML = date.toDateString();
} setInterval(updateTime, 1000);


const form = document.getElementById('city-form');
const result = document.getElementById('result');
const temp = document.getElementById('temp');
const degree = document.getElementById('deg');
const button = document.getElementById('unit');
const description = document.getElementById('desc');
const weatherIcon = document.getElementById('wicon');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value; 
    result.textContent=`You searched for: ${city}`
  form.reset();
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3cb937893a4d8a713e99c4b3e5453b9c`
  fetch(url).then(response => response.json()).then(data => temp.textContent = Math.ceil(data.main.temp-273.15));
  fetch(url).then(response => response.json()).then(data => description.textContent = data.weather[0].description);
  fetch(url).then(response => response.json()).then(data => weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
  weatherIcon.style.display = 'block';
  degree.textContent = '°C';
  button.textContent = 'Fehrenhite!';
});

function convert(){
  if(degree.textContent === '°C'){
    degree.textContent = '°F';
    temp.textContent = (temp.textContent*9/5)+32;
    unit.textContent = 'Celsius!';
  }else{
    degree.textContent = '°C';
    temp.textContent = (temp.textContent- 32)*5/9;
    unit.textContent = 'Fehrenhite!';
  }
}

