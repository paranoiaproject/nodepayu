'use strict';

/**
 * Delivery is the model for the delivery options
 * @param {number} firstName
 * @param {number} lastName
 * @param {number} email
 * @param {number} phone
 * @param {number} company
 * @param {number} address
 * @param {number} zipCode
 * @param {number} city
 * @param {number} state
 * @param {number} countryCode
 */

var Delivery = (function () {

  return function (firstName, lastName, email, phone, company, address, zipCode, city, state, countryCode) {
      
    var constructor = new Object();
    
    constructor.firstName;
    
    constructor.lastName;
    
    constructor.email;
    
    constructor.phone;
    
    constructor.company;
    
    constructor.address;
    
    constructor.zipCode;
    
    constructor.city;
    
    constructor.state;
    
    constructor.countryCode;
    
    return {
        
      /**
       * getFirstName() is a getter method to get the user name
       *
       * @noparam
      */
      getFirstName : function () {
        return constructor.firstName;
      },  
      
      /**
       * getLastName() is a getter method to get the user last name
       *
       * @noparam
      */
      getLastName : function () {
        return constructor.lastName;
      },
      
      /**
       * getEmail() is a getter method to get the email address
       *
       * @noparam
      */
      getEmail : function () {
        return constructor.email;
      },
      
      /**
       * getPhone() is a getter method to get the phone number
       *
       * @noparam
      */
      getPhone : function () {
        return constructor.phone;
      },
      
      /**
       * getCompany() is a getter method to get the company name
       *
       * @noparam
      */
      getCompany : function () {
        return constructor.company;
      },
      
      /**
       * getAddress() is a getter method to get the current address
       *
       * @noparam
      */
      getAddress : function () {
        return constructor.address;
      },
      
      /**
       * getZipCode() is a getter method to get the zip code
       *
       * @noparam
      */
      getZipCode : function () {
        return constructor.zipCode;
      },

      /**
       * getCity() is a getter method to get the city name
       *
       * @noparam
      */
      getCity : function () {
        return constructor.city;
      },
      
      /**
       * getCountryCode() is a getter method to get the country code
       *
       * @noparam
      */
      getCountryCode : function () {
        return constructor.countryCode;
      },

      /**
       * setFirstName() is a setter method for the first name
       *
       * @param {string} firstName
      */
      setFirstName : function (firstName) {
        constructor.firstName = firstName;
      },

      /**
       * setLastName() is a setter method for the last name
       *
       * @param {string} lastName
      */
      setLastName : function (lastName) {
        constructor.lastName = lastName;
      },

      /**
       * setEmail() is a setter method for the email address
       *
       * @param {string} email
      */
      setEmail : function (email) {
        constructor.email = email;
      },

      /**
       * setPhone() is a setter method for the phone number
       *
       * @param {string} phone
      */
      setPhone : function (phone) {
        constructor.phone = phone;
      },            

      /**
       * setCompany() is a setter method for the company
       *
       * @param {string} company
      */
      setCompany : function (company) {
        constructor.company = company;
      },

      /**
       * setAddress() is a setter method for the address
       *
       * @param {string} address
      */
      setAddress : function (address) {
        constructor.address = address;
      },

      /**
       * setZipCode() is a setter method for the zip code
       *
       * @param {number} zipCode
      */
      setZipCode : function (zipCode) {
        constructor.zipCode = zipCode;
      },  

      /**
       * setCity() is a setter method for the city
       *
       * @param {string} city
      */
      setCity : function (city) {
        constructor.city = city;
      },                   

      /**
       * setCountryCode() is a setter method for the country code
       *
       * @param {number} countryCode
      */
      setCountryCode : function (countryCode) {
        constructor.countryCode = countryCode;
      }               
        
    }
      
  }
    
})();