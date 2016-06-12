'use strict';

var Card = require('Card');

/**
 * Builder is the model for building objects
 * @param {Config} config
 */
var Builder = (function () {

  return function (config) {

    var constructor = new Object();

    constructor.card = null;

    return {

      /**
       * buildCard() is a builder method to build a card with its credentials
       *
       * @param {number} number
       * @param {number} cvv
       * @param {number} month
       * @param {number} year
       * @param {string} owner
       * @return {Card} this.card
      */
      buildCard : function (number, cvv, month, year, owner) {
        constructor.card = new Card(number, cvv, month, year, owner);
        return constructor.card;
      },

      /**
       * setCard() is a setter method for setting a card
       *
       * @param {Card} card
      */
      setCard : function (card) {
        constructor.card = card;
      },

      /**
       * getCard() is a getter method to get the card instance
       *
       * @noparam
      */
      getCard : function () {
        return constructor.card;
      }

    }

  }

})();
