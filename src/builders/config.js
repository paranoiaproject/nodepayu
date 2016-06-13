const build = require('stampit'),
      defaults = require('../defaults/config');

const ConfigBuilder = build({
  methods: {
    getMerchantId() {
      return this.merchantId;
    },
    getSecretKey() {
    	return this.secretKey;
    },
    getPaymentEndpointUrl() {
    	return this.paymentEndpointUrl;
    },
    getLoyaltyInquiryEndPointUrl() {
    	return this.loyaltyInquiryEndPointUrl;
    },
    getPaymentReturnPointUrl() {
    	return this.paymentReturnPointUrl;
    }
  }
});

module.exports = build.compose(defaults, ConfigBuilder);


