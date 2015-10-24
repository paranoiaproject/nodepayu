'use strict';

/**
 * Config is the model for configuration variables
 * @param {string} merchantId
 * @param {string} secretKey
 * @param {string} paymentEndpointUrl
 * @param {string} loyaltyInquiryEndPointUrl
 * @param {string} paymentReturnPointUrl
 */
var Config = (function () {

  return function (merchantId, secretKey, paymentEndpointUrl, loyaltyInquiryEndPointUrl, paymentReturnPointUrl) {

    var constructor = new Object();

    constructor.merchantId = merchantId;

    constructor.secretKey = secretKey;

    constructor.paymentEndpointUrl = paymentEndpointUrl;

    constructor.loyaltyInquiryEndPointUrl = loyaltyInquiryEndPointUrl;

    constructor.paymentReturnPointUrl = paymentReturnPointUrl;

    return {

      /**
       * getMerchantId() is a getter method to fetch merchant id
       *
       * @noparam
       * @return merchantId
      */
      getMerchantId : function () {
        return constructor.merchantId;
      },

      /**
       * getSecretKey() is a getter method to fetch secret key
       *
       * @noparam
       * @return secretKey
      */
      getSecretKey : function () {
        return constructor.secretKey;
      },

      /**
       * getSecretKey() is a getter method to fetch endpoint url for payment
       *
       * @noparam
       * @return paymentEndpointUrl
      */
      getPaymentEndpointUrl : function () {
        return constructor.paymentEndpointUrl;
      },

      /**
       * getLoyaltyInquiryEndPointUrl() is a getter method to fetch endpoint url for loyalty inquiry
       *
       * @noparam
       * @return loyaltyInquiryEndPointUrl
      */
      getLoyaltyInquiryEndPointUrl : function () {
        return constructor.loyaltyInquiryEndPointUrl;
      },

      /**
       * getPaymentReturnPointUrl() is a getter method to fetch point url for payment return
       *
       * @noparam
       * @return paymentReturnPointUrl
      */
      getPaymentReturnPointUrl : function () {
        return constructor.paymentReturnPointUrl;
      },

      /**
       * setMerchantId() is a setter method to update merchant id
       *
       * @param {string} merchantId
      */
      setMerchantId : function (merchantId) {
        constructor.merchantId = merchantId;
      },

      /**
       * setMerchantId() is a setter method to update secret key
       *
       * @param {string} secretKey
      */
      setSecretKey : function (secretKey) {
        constructor.secretKey = secretKey;
      },

      /**
       * setPaymentEndpointUrl() is a setter method to update endpoint url for payment
       *
       * @param {string} paymentEndpointUrl
      */
      setPaymentEndpointUrl : function (paymentEndpointUrl) {
        constructor.paymentEndpointUrl = paymentEndpointUrl;
      },

      /**
       * setLoyaltyInquiryEndPointUrl() is a setter method to update endpoint url for loyalty inquiry
       *
       * @param {string} loyaltyInquiryEndPointUrl
      */
      setLoyaltyInquiryEndPointUrl : function (loyaltyInquiryEndPointUrl) {
        constructor.loyaltyInquiryEndPointUrl = loyaltyInquiryEndPointUrl;
      },

      /**
       * setPaymentReturnPointUrl() is a setter method to update point url for payment return
       *
       * @param {string} paymentReturnPointUrl
      */
      setPaymentReturnPointUrl : function (paymentReturnPointUrl) {
        constructor.paymentReturnPointUrl = paymentReturnPointUrl;
      }

    }

  }

})();
