const build = require('stampit'),
			config = require('./builders/config');

const AppBuilder = build({
	
	methods: {

		getConfig() {
			return this.config;
		},

		setConfig(config) {
			this.config = config;
		},

		getInstance() {
			return this;
		}

	}

});

module.exports = build.compose(AppBuilder);