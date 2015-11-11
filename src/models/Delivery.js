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
            
            getFirstName : function () {
                return constructor.firstName;
            },
            
            getLastName : function () {
                return constructor.lastName;
            },
            
            getEmail : function () {
                return constructor.email;
            },
            
            getPhone : function () {
                return constructor.phone;
            },
            
            getCompany : function () {
                return constructor.company;
            },
            
            getAddress : function () {
                return constructor.address;
            },
            
            getZipCode : function () {
                return constructor.zipCode;
            },
,
            getCity : function () {
                return constructor.city;
            },
            
            getCountryCode : function () {
                return constructor.countryCode;
            },

            setFirstName : function (firstName) {
                constructor.firstName = firstName;
            },

            setLastName : function (lastName) {
                constructor.lastName = lastName;
            },

            setEmail : function (email) {
                constructor.email = email;
            },

            setPhone : function (phone) {
                constructor.phone = phone;
            },            

            setCompany : function (company) {
                constructor.company = company;
            },

            setAddress : function (address) {
                constructor.address = address;
            },

            setZipCode : function (zipCode) {
                constructor.zipCode = zipCode;
            },  

            setCity : function (city) {
                constructor.city = city;
            },                   

            setCountryCode : function (countryCode) {
                constructor.countryCode = countryCode;
            }               
            
        }
        
    }
    
})();