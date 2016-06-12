//import the Config builder
const Config = require('../builders/config');

//initialize a new config builder instance
var config = Config({
	merchantId: '12344',
	secretKey: '8!dkLsXX',
	paymentEndpointUrl: '/holyMountains',
	loyaltyInquiryEndPointUrl: '/takeMeBackHome',
	paymentReturnPointUrl: '/noMoreGain'
});

console.log(config.getMerchantId()); //logs 12344
console.log(config.getSecretKey()); //logs 8!dkLsXX
console.log(config.getPaymentEndpointUrl()); //logs /holyMountains
console.log(config.getLoyaltyInquiryEndPointUrl()); //logs /takeMeBackHome
console.log(config.getPaymentReturnPointUrl()); //logs noMoreGain