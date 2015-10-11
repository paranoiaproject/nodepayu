'use strict';

var request = require('request');

var PaymentRequestBuilder = require('PaymentRequestBuilder');
var LoyaltyInquiryRequestBuilder = require('LoyaltyInquiryRequestBuilder');

/**
 * Request is the model for returning result from payU
 * @param {Config} config
 */
var Request = (function () {

  return function (config) {

    var constructor = new Object();

    constructor.config = config;

    return {

      /**
       * createPaymentRequestBuilder() is a getter method to the returning response
       *
       * @param {Config} config
       * @return PaymentRequestBuilder
      */
      createPaymentRequestBuilder : function (config) {
        return new PaymentRequestBuilder(config);
      },

      /**
       * createLoyaltyInquiryRequestBuilder() is a getter method to the returning response
       *
       * @param {Config} config
       * @return LoyaltyInquiryRequestBuilder
      */
      createLoyaltyInquiryRequestBuilder : function (config) {
        return new LoyaltyInquiryRequestBuilder(config);
      },

      /**
       * post() is a method to make some requests for payment and loyalty processes
       *
       * @param {string} endpointUrl
       * @param {function} callback
       * @param {function} errorCallback
      */
      post : function (endpointUrl, callback, errorCallback) {
        try {
          var result;
          request(endpointUrl, function (error, response, body) {
            if (error) {
              errorCallback(error.message);
            } else {
              result = body;
            }
          });
          callback(result);
        } catch (e) {
          errorCallback(e);
        }
      },

      /**
       * makePayment() is a method to make some requests for payment
       *
       * @param {Config} config
       * @param {function} callback
       * @param {function} errorCallback
      */
      makePayment : function (config, callback, errorCallback) {
        var response;
        this.post(config.getPaymentEndpointUrl(), function (data) {
          response = data;
        }, function (error) {
          errorCallback(error.message);
        });
        callback(response);
      },

      /**
       * makeLoyaltyInquiry() is a method to make some requests for loyalty
       *
       * @param {Config} config
       * @param {function} callback
       * @param {function} errorCallback
      */
      makeLoyaltyInquiry : function (config, callback, errorCallback) {
        var response;
        this.post(config.getLoyaltyInquiryEndPointUrl(), function (data) {
          response = data;
        }, function (error) {
          errorCallback(error.message);
        });
        callback(response);
      }

    }

  }

})();
