'use strict';

/**
 * Order is the model for the order process
 * @param {string} code
 * @param {date} date
 * @param {string} currency
 * @param {string} paymentMethod
 * @param {string} installment
 * @param {string} timeout
 * @param {string} clientIp
 * @param {number} loyaltyAmount
 * @param {string} recurringPayment
 */

var Order = (function () {

  return function (code, date, currency, paymentMethod, installment, timeout, clientIp, loyaltyAmount, recurringPayment) {
      
    var constructor = new Object();

    constructor.code = null;

    constructor.date = null;

    constructor.currency = 'TRY';

    constructor.paymentMethod = 'CCVISAMC';

    constructor.installment = 1;

    constructor.timeout = null;

    constructor.clientIp = null;

    constructor.loyaltyAmount = null;

    constructor.recurringPayment = null;

    return {

    	/**
    	 * setCode() is a setter method for the code
    	 *
    	 * @param {string} code
    	*/
			setCode : function (code) {
				constructor.code = code;
			},

			/**
			 * setClientIp() is a setter method for the client ip
			 *
			 * @param {string} clientIp
			*/
			setClientIp : function (clientIp) {
				constructor.clientIp = clientIp;
			},

			/**
			 * setInstallment() is a setter method for the installment
			 *
			 * @param {string} clientIp
			*/
			setInstallment : function (installment) {
				constructor.installment = installment;
			},

			/**
			 * setCurrency() is a setter method for the currency
			 *
			 * @param {string} currency
			*/
			setCurrency : function (currency) {
				constructor.currency = currency;
			},

			/**
			 * setLoyaltyAmount() is a setter method for the loyalty amount
			 *
			 * @param {number} loyaltyAmount
			*/
			setLoyaltyAmount : function (loyaltyAmount) {
				constructor.loyaltyAmount = loyaltyAmount;
			},

			/**
			 * setPaymentMethod() is a setter method for the payment method
			 *
			 * @param {string} paymentMethod
			*/
			setPaymentMethod : function (paymentMethod) {
				constructor.paymentMethod = paymentMethod;
			},

			/**
			 * setDate() is a setter method for the current date
			 *
			 * @param {date} date
			*/
			setDate : function (date) {
				constructor.date = date;
			},

			/**
			 * setTimeout() is a setter method for the timeout value
			 *
			 * @param {string} timeout
			*/
			setTimeout : function (timeout) {
				constructor.timeout = timeout;
			},

			/**
			 * setRecurringPayment() is a setter method for the recurring payment
			 *
			 * @param {string} recurringPayment
			*/
			setRecurringPayment : function (recurringPayment) {
				constructor.recurringPayment = recurringPayment;
			},

			/**
			 * getCode() is a getter method to get the code
			 *
			 * @noparam
			*/
			getCode : function () {
				return constructor.code;
			},

			/**
			 * getClientIp() is a getter method to get the client ip
			 *
			 * @noparam
			*/
			getClientIp : function () {
				return constructor.clientIp;
			},

			/**
			 * getInstallment() is a getter method to get the installment
			 *
			 * @noparam
			*/
			getInstallment : function () {
				return constructor.installment;
			},

			/**
			 * getCurrency() is a getter method to get the currency
			 *
			 * @noparam
			*/
			getCurrency : function () {
				return constructor.currency;
			},

			/**
			 * getLoyaltyAmount() is a getter method to get the loyalty amount
			 *
			 * @noparam
			*/
			getLoyaltyAmount : function () {
				return constructor.loyaltyAmount;
			},

			/**
			 * getPaymentMethod() is a getter method to get the payment method
			 *
			 * @noparam
			*/
			getPaymentMethod : function () {
				return constructor.paymentMethod;
			},

			/**
			 * getDate() is a getter method to get the date
			 *
			 * @noparam
			*/
			getDate : function () {
				return constructor.paymentMethod;
			},

			/**
			 * getTimeout() is a getter method to get the timeout
			 *
			 * @noparam
			*/
			getTimeout : function () {
				return constructor.timeout;
			},

			/**
			 * isRecurringPayment() is a getter method to get the recurring payment
			 *
			 * @noparam
			*/
			isRecurringPayment : function () {
				return constructor.recurringPayment;
			}

    }

   };

})();