let date = document.getElementById("date")
let day = document.getElementById("day")
let month = document.getElementById("month")


let today = new Date()

let weekdays = ['Дуйшомбу','Шейшемби','Шаршемби','бейшемби','Жума','ишемби','Жекшемби',];
let allMonth = ['январь','февраль','март','Апрель','май','июнь','июль','августь','сентябрь','октябрь','ноябрь',	'декабрь',];

date.innerHTML = today.getDate()
day.innerHTML = weekdays[today.getDay()]
month.innerHTML = allMonth[today.getMonth()]
year.innerHTML = today.getFullYear()