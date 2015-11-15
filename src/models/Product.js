'use strict';

/**
 * Product is the model for the product instance
 * @param {string} name
 * @param {string} code
 * @param {number} quantity
 * @param {string} info
 * @param {double} price
 * @param {string} version
 * @param {number} vat
 */

var Product = (function () {

  return function (name, code, quantity, info, price, version, vat) {
      
    var constructor = new Object();

    constructor.name = '';

    constructor.code = null;

    constructor.quantity = 0;

    constructor.info = '';

    constructor.price = 0.0;

    constructor.version = null;

    constructor.vat = null;

    return {

    	/**
    	 * setName() is a setter method for the product name
    	 *
    	 * @param {string} name
    	*/
    	setName : function (name) {
    		constructor.name = name;
    	},

    	/**
    	 * setCode() is a setter method for the product code
    	 *
    	 * @param {string} code
    	*/
			setCode : function (code) {
				constructor.code = code;
			},

			/**
			 * setQuantity() is a setter method for the product quantity
			 *
			 * @param {number} quantity
			*/
			setQuantity : function (quantity) {
				constructor.quantity = quantity;
			},

			/**
			 * setInfo() is a setter method for the product information
			 *
			 * @param {number} info
			*/
			setInfo : function (info) {
				constructor.info = info;
			},

			/**
			 * setPrice() is a setter method for the product price
			 *
			 * @param {double} info
			*/
			setPrice : function (price) {
				constructor.price = price;
			},

			/**
			 * setVersion() is a setter method for the version
			 *
			 * @param {string} version
			*/
			setVersion : function (version) {
				constructor.version = version;
			},

			/**
			 * setVat() is a setter method for the product information
			 *
			 * @param {number} vat
			*/
			setVat : function (vat) {
				constructor.vat = vat;
			},

			/**
			 * getName() is a getter method to get the product name
			 *
			 * @noparam
			*/
			getName : function () {
				return constructor.name;
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
			 * getQuantity() is a getter method to get the procut quantity
			 *
			 * @noparam
			*/
			getQuantity : function () {
				return constructor.quantity;
			},

			/**
			 * getInfo() is a getter method to get the info
			 *
			 * @noparam
			*/
			getInfo : function () {
				return constructor.info;
			},

			/**
			 * getPrice() is a getter method to get the product price
			 *
			 * @noparam
			*/
			getPrice : function () {
				return constructor.price;
			},

			/**
			 * getVersion() is a getter method to get the version
			 *
			 * @noparam
			*/
			getVersion : function () {
				return constructor.version;
			},

			/**
			 * getVat() is a getter method to get the vat value
			 *
			 * @noparam
			*/
			getVat : function () {
				return constructor.vat;
			}

    }

  };

})();