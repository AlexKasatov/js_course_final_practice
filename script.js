document.onload = function () {
  window.location = "index.html";
};

class Person {
  constructor(name) {
    this.name = name;
    this.happiness = 0;
  }

  hasCat() {
    return ++this.happiness;
  }

  hasRest() {
    return ++this.happiness;
  }

  hasMoney() {
    return ++this.happiness;
  }

  isSunny() {
    const APIKEY = "b410debdf0251026955d60b4b62d0776";
    const city = "moscow";
    const url =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      APIKEY;

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url, false);

    xhr.send();

    if (xhr.status != 200) {
      console.log(xhr.status + " " + xhr.statusText);
    } else {
      var DATA = JSON.parse(xhr.responseText);
      var currentTemp = DATA.main.temp - 273;
      console.log("Температура в Москве = " + currentTemp);

      currentTemp >= 16 ? ++this.happiness : this.happiness;
      return this.happiness;
    }
  }
}

const form = document.forms[0];

form.onsubmit = function (e) {
  e.preventDefault();
  console.log("submited");
  var nameValue = document.getElementById("name").value;
  var hasCatRadio = document.getElementById("yesCat");
  var haveRest = document.getElementById("restYes");
  var hasMoney = document.getElementById("moneyYes");

  var newUser = new Person(); //создаем пермеенную с нашим новым юзером
  newUser.name = nameValue;
  newUser.isSunny(); // проверяем погоду

  //делаем проверки выбрано ли "Да" для вызова методов
  if (hasCatRadio.checked) {
    newUser.hasCat();
  }

  if (haveRest.checked) {
    newUser.hasRest();
  }

  if (hasMoney.checked) {
    newUser.hasMoney();
  }

  var icon = document.querySelector(".icon");
  var personName = document.querySelector(".personName");
  personName.textContent = newUser.name;
  console.log("Настроение нашего юзера = " + newUser.happiness);

  //делаем проверки на количество счастья и вставляем соответствующий смайл

  switch (newUser.happiness) {
    case 4:
      icon.textContent = "😁";
      break;

    case 3:
    case 2:
      icon.textContent = "😐";
      break;

    case 1:
    case 0:
      icon.textContent = "😓";
      break;

    default:
      icon.textContent = "😓";
      break;
  }
};
