//import the Config builder
const build = require('stampit'),
      App = require('../app'),
      config = require('../builders/config'),
      CONSTANTS = require('../constants/config');

config = config({
  merchantId: CONSTANTS.MERCHANT_ID,
  secretKey: CONSTANTS.SECRET_KEY,
  paymentEndpointUrl: CONSTANTS.PAYMENT_ENDPOINT_URL,
  loyaltyInquiryEndPointUrl: CONSTANTS.LOYALTY_INQUIRY_ENDPOINT_URL,
paymentReturnPointUrl: CONSTANTS.PAYMENT_RETURN_ENDPOINT_URL
});

var myApp = App({
  config: config
});

console.dir(config);