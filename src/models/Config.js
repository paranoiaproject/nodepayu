const builder = require('stampit');

const defaults = builder().refs({
	merchantId: '',
	secretKey: '',
	paymentEndpointUrl: '',
	loyaltyInquiryEndPointUrl: '',
	paymentReturnPointUrl: ''
});

/*
const config = builder().init(function() {
  
  this.getMerchantId = () => {
    return merchantId;
  };

  this.setMerchantId = (merchantId) => {
    merchantId = merchantId;
  };

  this.getSecretKey = () => {
    return secretKey;
  };

  this.getPaymentEndpointUrl = () => {
    return paymentEndpointUrl;
  };

  this.getLoyaltyInquiryEndPointUrl = () => {
    return loyaltyInquiryEndPointUrl;
  };

  this.getPaymentReturnPointUrl = () => {
    return paymentReturnPointUrl;
  };

});
*/

const config = builder({
  methods: {
    getMerchantId() {
      this.members[member.name] = member;
      return this;
    },
    getMember(name) {
      return this.members[name];
    }
  },
  refs: {
    merchantId: '',
    secretKey: '',
		paymentEndpointUrl: '',
		loyaltyInquiryEndPointUrl: '',
		paymentReturnPointUrl: ''
  }
});

//module.exports = Config;

const bar = builder.compose(defaults, config);

console.dir(bar);
bar.getMerchantId();