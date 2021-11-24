class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "London";
  }

  populateUI(data) {
    //de-structure vars

    //add them to inner HTML

    this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h3 class="card-title">${data.name}</h3>
                <h4 class="card-subtitle mb-2 text-muted">${data.main.temp.toFixed()} °C</h4>
                <p class="card-text ">Weather conditions are described as: ${
                  data.weather[0].description
                } </p>
                <img src="http://openweathermap.org/img/wn/${
                  data.weather[0].icon
                }@2x.png">
            </div>
        </div>
        
        
        `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    localStorage.setItem("city", JSON.stringify(data));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}
