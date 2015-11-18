'use strict';

/**
 * Billing is the model for the billing process
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} email
 * @param {string} phone
 * @param {string} fax
 * @param {string} address
 * @param {string} zipCode
 * @param {string} city
 * @param {string} state
 */
var Billing = (function () {

  return function (firstName, lastName, email, phone, fax, address, zipCode, city, state) {

  	var constructor = new Object();

  	constructor.firstName = firstName;

  	constructor.lastName = lastName;

  	constructor.email = email;

  	constructor.phone = phone;

  	constructor.fax = fax;

  	constructor.address = address;

  	constructor.zipCode = zipCode;

  	constructor.city = city;

  	constructor.state = state;

  	constructor.countryCode = 'TR';

  	return {

			/**
			 * setFirstName() is a setter method the current first name
			 *
			 * @param {string} firstName
			*/
			setFirstName : function (firstName) {
			  constructor.firstName = firstName;
			},

			/**
			 * setLastName() is a setter method the current last name
			 *
			 * @param {string} lastName
			*/
			setLastName : function (lastName) {
			  constructor.lastName = lastName;
			},

			/**
			 * setEmail() is a setter method the current email
			 *
			 * @param {string} email
			*/
			setEmail : function (email) {
			  constructor.email = email;
			},

			/**
			 * setPhone() is a setter method the current phone
			 *
			 * @param {string} phone
			*/
			setPhone : function (phone) {
			  constructor.phone = phone;
			},

			/**
			 * setFax() is a setter method the current fax
			 *
			 * @param {string} fax
			*/
			setFax : function (fax) {
			  constructor.fax = fax;
			},

			/**
			 * setAddress() is a setter method the current fax
			 *
			 * @param {string} address
			*/
			setAddress : function (address) {
			  constructor.address = address;
			},

			/**
			 * setZipCode() is a setter method the current zipcode
			 *
			 * @param {string} zipCode
			*/
			setZipCode : function (zipCode) {
			  constructor.zipCode = zipCode;
			},

			/**
			 * setCity() is a setter method the current city
			 *
			 * @param {string} city
			*/
			setCity : function (city) {
			  constructor.city = city;
			},

			/**
			 * setState() is a setter method the current state
			 *
			 * @param {string} state
			*/
			setState : function (state) {
			  constructor.state = state;
			},

			/**
			 * getFirstName() is a getter method the current first name
			 *
			 * @noparam
			 * @return {string} constructor.firstName
			*/
			getFirstName : function () {
			  return constructor.firstName;
			},

			/**
			 * getLastName() is a getter method the current last name
			 *
			 * @noparam
			 * @return {string} constructor.lastName
			*/
			getLastName : function () {
			  return constructor.lastName;
			},

			/**
			 * getEmail() is a getter method the current email
			 *
			 * @noparam
			 * @return {string} constructor.email
			*/
			getEmail : function () {
			  return constructor.email;
			},

			/**
			 * getPhone() is a getter method the current email
			 *
			 * @noparam
			 * @return {string} constructor.phone
			*/
			getPhone : function () {
			  return constructor.phone;
			},

			/**
			 * getFax() is a getter method the current fax
			 *
			 * @noparam
			 * @return {string} constructor.fax
			*/
			getFax : function () {
			  return constructor.fax;
			},

			/**
			 * getAddress() is a getter method the current address
			 *
			 * @noparam
			 * @return {string} constructor.address
			*/
			getAddress : function () {
			  return constructor.address;
			},

			/**
			 * getZipCode() is a getter method the current zipCode
			 *
			 * @noparam
			 * @return {string} constructor.zipCode
			*/
			getZipCode : function () {
			  return constructor.zipCode;
			},

			/**
			 * getCity() is a getter method the current city
			 *
			 * @noparam
			 * @return {string} constructor.city
			*/
			getCity : function () {
			  return constructor.city;
			},

			/**
			 * getState() is a getter method the current state
			 *
			 * @noparam
			 * @return {string} constructor.state
			*/
			getState : function () {
			  return constructor.state;
			},

			/**
			 * getCountryCode() is a getter method the current country code
			 *
			 * @noparam
			 * @return {string} constructor.countryCode
			*/
			getCountryCode : function () {
			  return constructor.countryCode;
			}

  	}

  }

})();