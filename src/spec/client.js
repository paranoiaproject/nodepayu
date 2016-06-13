const build = require('stampit'),
			App = require('../models/app'),
			config = require('../models/config');

var client = App({config: config});

console.dir(client.getConfig().getMerchantId());
console.dir(client.getConfig().getSecretKey());
console.dir(client.getConfig().getPaymentEndpointUrl());
console.dir(client.getConfig().getLoyaltyInquiryEndPointUrl());
console.dir(client.getConfig().getPaymentReturnPointUrl());
