//import the Config builder
const Config = require('../builders/config'),
      CONSTANTS = require('../constants/config');

//initialize a new config builder instance
var config = Config({
	merchantId: CONSTANTS.MERCHANT_ID,
	secretKey: CONSTANTS.SECRET_KEY,
	paymentEndpointUrl: CONSTANTS.PAYMENT_ENDPOINT_URL,
	loyaltyInquiryEndPointUrl: CONSTANTS.LOYALTY_INQUIRY_ENDPOINT_URL,
	paymentReturnPointUrl: CONSTANTS.PAYMENT_RETURN_ENDPOINT_URL
});

module.exports = config;