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

function updateTime() {
  updateData("los-angeles", "America/Los_Angeles");
  updateData("sydney", "Australia/Sydney");
  updateData("tokyo", "Asia/Tokyo");
}

updateTime();
setInterval(updateTime, 1000);
