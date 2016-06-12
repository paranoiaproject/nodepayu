'use strict';

/**
 * Basket is the model for the basket
 * @param {number} number
 */
var Basket = (function () {

  return function () {

    var constructor = new Object();

    constructor.collection = null;

    return {

      /**
       * add() is a method to add a product
       *
       * @param {Product} product
      */
      add : function (product) {
        constructor.collection.push(product.getCode());
      },

      /**
       * remove() is a method to remove a product by indicating its code
       *
       * @param {string} code
      */
      remove : function (code) {
        for (var counter = 0, len = constructor.collection.length; counter < len; counter++) {
          if (constructor.collection[counter] === code) {
            constructor.collection.splice(counter, 1);
          }
        }
      },

      /**
       * getCollection() is a getter method to fetch the current collection
       *
       * @noparam
      */
      getCollection : function () {
        return constructor.collection;
      },

      /**
       * getTotalPrice() is a getter method to fetch the total price
       *
       * @noparam
      */
      getTotalPrice : function () {
        var sum = 0.0;
        for (var counter = 0, len = constructor.collection.length; counter < len; counter++) {
          sum += constructor.collection[counter];
        }
        return sum;
      }

    }

  }

});