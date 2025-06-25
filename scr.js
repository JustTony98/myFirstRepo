"use strict";

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  fullPrice: 0,
  allServicePrices: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",

  asking: function () {
    this.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    this.screens = prompt(
      "Какие типы экранов нужно разработать? (например: Простые, Сложные, Интерактивные"
    );
    do {
      this.screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!this.isNumber(this.screenPrice));
    this.screenPrice = +this.screenPrice;
    this.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      const serviceName = prompt("Какой дополнительный тип услуги нужен?");
      let servicePrice;

      do {
        servicePrice = prompt("Сколько это будет стоить?");
      } while (!this.isNumber(servicePrice));

      servicePrice = +servicePrice;
      sum += servicePrice;

      if (i === 0) {
        this.service1 = serviceName;
      } else {
        this.service2 = serviceName;
      }
    }

    return sum;
  },

  getFullPrice: function () {
    return this.screenPrice + this.allServicePrices;
  },

  getServicePercentPrice: function () {
    return this.fullPrice - this.fullPrice * (this.rollback / 100);
  },

  getTitle: function () {
    return (
      this.title.trim()[0].toUpperCase() +
      this.title.trim().substr(1).toLowerCase()
    );
  },

  getRollbackMessage: function (price) {
    if (price > 30000) {
      return "Даем скидку в 10%";
    } else if (price > 15000 && price <= 30000) {
      return "Даем скидку в 5%";
    } else if (price > 0 && price <= 15000) {
      return "Скидка не предусмотрена";
    } else if (price <= 0) {
      return "Что-то пошло не так";
    }
  },

  start: function () {
    this.asking();
    this.allServicePrices = this.getAllServicePrices();
    this.fullPrice = this.getFullPrice();
    this.servicePercentPrice = this.getServicePercentPrice();
    this.title = this.getTitle();
    this.logger();
  },

  logger: function () {
    console.log("Полная стоимость проекта: " + this.fullPrice);
    console.log("Стоимость с учетом скидки: " + this.servicePercentPrice);
    console.log(this.getRollbackMessage(this.fullPrice));

    console.log("\nВсе свойства и методы объекта appData:");
    for (const key in this) {
      if (typeof this[key] !== "function") {
        console.log(`${key}: ${this[key]}`);
      } else {
        console.log(`${key}: function`);
      }
    }
  },
};

appData.start();
