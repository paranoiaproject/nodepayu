# NodePayU
NodeJS ported version of PayuClient

###Setup

```javascript
npm install nodepayu --save
```

###Initializing

```javascript
var client = require('nodepayu');

var nodepayu = client();

nodepayu.post('endpointUrl', (response) => {
	console.log(response); //successfull result
}, (error) => {
	console.log(error); //result with error
});
```
