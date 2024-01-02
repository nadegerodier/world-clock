function updateData(city, timeZone) {
  let cityElement = document.getElementById(city);
  if (cityElement) {
    let dateElement = cityElement.querySelector(".date");
    let timeElement = cityElement.querySelector(".time");
    dateElement.innerHTML = moment().tz(timeZone).format("MMMM D, YYYY");
    timeElement.innerHTML = moment()
      .tz(timeZone)
      .format("h:mm:ss [<small>]A[</small>]");
  }
}

function findTimeZone() {
  updateData("los-angeles", "America/Los_Angeles");
  updateData("sydney", "Australia/Sydney");
  updateData("tokyo", "Asia/Tokyo");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".cities");

  citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss"
        )} <small>${cityTime.format("A")}</small></div>
    </div>
    <a href="/" id="home-link">Home</a>
    `;
  setTimeout(() => {
    updateCity(event);
  }, 1000);
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);

findTimeZone();
setInterval(findTimeZone, 1000);
