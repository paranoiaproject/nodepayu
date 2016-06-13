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

console.log(config.getMerchantId()); //logs 12344
console.log(config.getSecretKey()); //logs 8!dkLsXX
console.log(config.getPaymentEndpointUrl()); //logs /holyMountains
console.log(config.getLoyaltyInquiryEndPointUrl()); //logs /takeMeBackHome
console.log(config.getPaymentReturnPointUrl()); //logs noMoreGain