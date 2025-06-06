let title = "myFirstRepo";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 20000;
let rollback = 1500;
let fullPrice = 100000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(
  `Стоимость верстки экранов ${screenPrice} рублей, \nСтоимость разработки сайтов ${fullPrice} рублей`
);
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));

alert("Предъявите документики");
console.log("Документики отсутствуют");
