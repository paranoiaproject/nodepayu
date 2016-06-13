const build = require('stampit');

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
  },
  refs: {
  	config: null
  }
});

module.exports = build.compose(AppBuilder);
