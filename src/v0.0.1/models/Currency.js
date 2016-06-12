'use strict';

/**
 * Currency is the model for the current currency
 * @param {number} code
 */
var Currency = (function () {

  return function (code) {

    var constructor = new Object();

    constructor.code = 0;

    return {

      /**
       * getCode() is a getter method the code
       *
       * @noparam
       * @return {number} constructor.code
      */
      getCode : function () {
        return constructor.code;
      },

      /**
       * setCode() is a setter method the code
       *
       * @param {string} firstName
      */
      setCode : function (code) {
        constructor.code = code;
      },

      /**
       * convertCodeToString() is a string converter for the number-typed code
       *
       * @noparam
       * @return {string} constructor.code
      */
      convertCodeToString : function (code) {
        return '' + code.toString();
      }

    }

  }

})();
