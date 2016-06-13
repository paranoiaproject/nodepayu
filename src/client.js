const build = require('stampit'),
			App = require('./models/app'),
			config = require('./models/config');

module.exports = App({config: config});