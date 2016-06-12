//import the Config builder
const App = require('../app'),
			config = require('../builders/config');

var app = App({
	config: config
});

app.getConfig();
app.getInstance();