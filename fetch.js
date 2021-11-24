class Fetch {
  async getCurrent(input) {
    const apiKey = "5f833083abdac8c9b95d87a3d3cddf48";
    const unit = "metric";
    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=${unit}`
    );

    //Returns JSON Data
    const data = await response.json();

    console.log(data);

    return data;
  }
}
