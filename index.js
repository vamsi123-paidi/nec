const apiKey = "28933cea050d87745f7a78373b5af88a";
const city = "narasaraopet"
const apiUrl= `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;

const weather = async ()=>{
  const response = await fetch(apiUrl + `&appid=${apiKey}`)
  const data =await response.json();
  console.log(data)
}
weather()