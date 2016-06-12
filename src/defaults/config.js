const build = require('stampit'),
			CONSTANTS = require('../constants/config');

module.exports = build().refs({
	merchantId: CONSTANTS.MERCHANT_ID,
	secretKey: CONSTANTS.SECRET_KEY,
	paymentEndpointUrl: CONSTANTS.PAYMENT_ENDPOINT_URL,
	loyaltyInquiryEndPointUrl: CONSTANTS.LOYALTY_INQUIRY_ENDPOINT_URL,
	paymentReturnPointUrl: CONSTANTS.PAYMENT_RETURN_ENDPOINT_URL
});