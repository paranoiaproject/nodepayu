# NodePayU
NodeJS ported version of PayuClient

###Setup

```javascript
npm install nodepayu --save
```

###Initializing

```javascript
var nodepayu = require('nodepayu')();

nodepayu.post('endpointUrl', (response) => {
	console.log(response); //successfull result
}, (error) => {
	console.log(error); //result with error
});
```
