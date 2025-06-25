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

  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrice();
    appData.title = appData.getTitle();
    appData.logger();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
  },

  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать? (например: Простые, Сложные, Интерактивные"
    );
    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!appData.isNumber(appData.screenPrice));
    appData.screenPrice = +appData.screenPrice;
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      const serviceName = prompt("Какой дополнительный тип услуги нужен?");
      let servicePrice;

      do {
        servicePrice = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(servicePrice));

      servicePrice = +servicePrice;
      sum += servicePrice;

      if (i === 0) {
        appData.service1 = serviceName;
      } else {
        appData.service2 = serviceName;
      }
    }

    return sum;
  },

  getFullPrice: function () {
    return appData.screenPrice + appData.allServicePrices;
  },

  getServicePercentPrice: function () {
    return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  getTitle: function () {
    return (
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substr(1).toLowerCase()
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

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
  },
};

appData.start();
