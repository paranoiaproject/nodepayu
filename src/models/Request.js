'use strict';

/**
 * Request is the model for returning result from payU
 * @param {string} error
 * @param {string} response
 * @param {string} body
 */
var Request = (function () {

  return function (error, response, body) {

    var constructor = new Object();

    constructor.error = error;

    constructor.response = response;

    constructor.body = body;

    return {

      /**
       * getError() is a getter method to the returning error message
       *
       * @param {function} callback
       * @return error
      */
      getError : function (callback) {
        callback(constructor.error);
      },

      /**
       * getResponse() is a getter method to the returning response
       *
       * @param {function} callback
       * @return response
      */
      getResponse : function (callback) {
        callback(constructor.response);
      },

      /**
       * getBody() is a getter method to the returning body of the response
       *
       * @param {function} callback
       * @return body
      */
      getBody : function (callback) {
        callback(constructor.body);
      }

    }

  }

})();
