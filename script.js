"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt(
  "Какие типы экранов нужно разработать? (например: Простые, Сложные, Интерактивные)"
);
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let rollback = 1500;
let servicePercentPrice = Math.ceil(fullPrice - rollback);
console.log(
  "Итоговая стоимость за вычетом отката: " + servicePercentPrice + " руб."
);
if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice <= 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice > 0 && fullPrice <= 15000) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice <= 0) {
  console.log("Что-то пошло не так");
}

console.log("Название проекта:", title);
console.log("Типы экранов:", screens);
console.log("Стоимость экранов:", screenPrice);
console.log("Нужен адаптив:", adaptive);
console.log("Доп. услуга 1:", service1, "-", servicePrice1);
console.log("Доп. услуга 2:", service2, "-", servicePrice2);
