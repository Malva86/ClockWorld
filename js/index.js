setInterval(function () {
  //Warsaw
  let warsawCity = document.querySelector("#warsaw");
  let warsawDate = warsawCity.querySelector(".date");
  let warsawTime = warsawCity.querySelector(".time");
  let warsawTimeMoment = moment().tz("Europe/Warsaw");
  warsawDate.innerHTML = warsawTimeMoment.format("MMMM, ddd Do YYYY");
  warsawTime.innerHTML = warsawTimeMoment.format("HH:mm:ss A");
}, 1000);
setInterval(function () {
  //Tokyo
  let tokyoCity = document.querySelector("#tokyo");
  let tokyoDate = tokyoCity.querySelector(".date");
  let tokyoTime = tokyoCity.querySelector(".time");
  let tokyoTimeMoment = moment().tz("Asia/Tokyo");
  tokyoDate.innerHTML = tokyoTimeMoment.format("MMMM, ddd Do YYYY");
  tokyoTime.innerHTML = tokyoTimeMoment.format("HH:mm:ss A");
}, 1000);
setInterval(function () {
  //NewYork
  let newYorkCity = document.querySelector("#new-york");
  let newYorkDate = newYorkCity.querySelector(".date");
  let newYorkTime = newYorkCity.querySelector(".time");
  let newYorkTimeMoment = moment().tz("America/New_York");
  newYorkDate.innerHTML = newYorkTimeMoment.format("MMMM, ddd Do YYYY");
  newYorkTime.innerHTML = newYorkTimeMoment.format("HH:mm:ss A");
}, 1000);
setInterval(function () {
  //CapeVerde
  let capeTownCity = document.querySelector("#cape-town");
  let capeTownDate = capeTownCity.querySelector(".date");
  let capeTownTime = capeTownCity.querySelector(".time");
  let capeTownTimeMoment = moment().tz("Atlantic/Cape_Verde");
  capeTownDate.innerHTML = capeTownTimeMoment.format("MMMM, ddd Do YYYY");
  capeTownTime.innerHTML = capeTownTimeMoment.format("HH:mm:ss A");
}, 1000);
