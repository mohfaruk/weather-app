//DOM Variables
const input = document.querySelector(".search-bar");
const errorBox = document.querySelector(".error");
const main = document.querySelector("#name");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const icon = document.querySelector(".icon");
const button = document.querySelector(".submit");

//Clears text from searchbar and error box
function clearSearch() {
  input.value = " ";
  errorBox.innerHTML = " ";
}

//Displays error message
function errorMessage(error) {
  errorBox.innerHTML = "City not found, try again...";
  console.log(`Something went wrong... ${error}`);
}

//Fetches weather data
function getWeather() {
  const unit = "metric"; //Temperature unit for url
  //Fetches url
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=5f833083abdac8c9b95d87a3d3cddf48&units=${unit}`
  )
    .then(response => response.json())
    .then(data => {
      let tempValue = data.main.temp.toFixed() + " °C";
      let nameValue = data.name;
      let descValue = data.weather[0].description;
      let iconValue = data.weather[0].icon;

      //Displays temperature info to DOM
      main.innerHTML = nameValue;
      temperature.innerHTML = tempValue;
      icon.src = `http://openweathermap.org/img/wn/${iconValue}@2x.png`;
      description.innerHTML = `Weather conditions:  ${descValue}`;

      clearSearch(); //Runs function when search has been made
    })

    .catch(error => errorMessage(error)); //Runs error message
}

//Execute search when user hits enter
input.onkeydown = event => {
  if (event.key == "Enter") {
    getWeather();
  }
};
button.addEventListener("click", getWeather); //Execute search when user clicks button
