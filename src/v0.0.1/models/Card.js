'use strict';

/**
 * Card is the model for the bank card
 * @param {number} number
 * @param {number} cvv
 * @param {number} month
 * @param {number} year
 * @param {string} owner
 */
var Card = (function () {

  return function (number, cvv, month, year, owner) {

    var constructor = new Object();

    constructor.number = number;

    constructor.cvv = cvv;

    constructor.month = month;

    constructor.year = year;

    constructor.owner = owner;

    return {

      /**
       * setNumber() is a setter method the current card number
       *
       * @param {number} number
      */
      setNumber : function (number) {
        constructor.number = number;
      },

      /**
       * setCvv() is a setter method the current cvv
       *
       * @param {number} cvv
      */
      setCvv : function (cvv) {
        constructor.cvv = cvv;
      },

      /**
       * setMonth() is a setter method the current month
       *
       * @param {number} month
      */
      setMonth : function (month) {
        constructor.month = month;
      },

      /**
       * setYear() is a setter method the current year
       *
       * @param {number} year
      */
      setYear : function (year) {
        constructor.year = year;
      },

      /**
       * setYear() is a setter method the current owner
       *
       * @param {string} owner
      */
      setOwner : function (owner) {
        constructor.owner = owner;
      },

      /**
       * getNumber() is a getter method the current card number
       *
       * @noparam
       * @return {number} constructor.number
      */
      getNumber : function () {
        return constructor.number;
      },

      /**
       * getCvv() is a getter method the current cvv
       *
       * @noparam
       * @return {number} constructor.cvv
      */
      getCvv : function () {
        return constructor.cvv;
      },

      /**
       * getCvv() is a getter method the current month
       *
       * @noparam
       * @return {number} constructor.month
      */
      getMonth : function () {
        return constructor.month;
      },

      /**
       * getCvv() is a getter method the current year
       *
       * @noparam
       * @return {number} constructor.year
      */
      getYear : function () {
        return constructor.year;
      },

      /**
       * getCvv() is a getter method the current owner
       *
       * @noparam
       * @return {number} constructor.owner
      */
      getOwner : function () {
        return constructor.owner;
      }

    }

  }

})();
