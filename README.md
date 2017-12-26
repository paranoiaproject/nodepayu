# NodePayU
Node.js-ported version of PayuClient

### Setup

```javascript
npm install nodepayu --save
```

### Usage

```js
const nodepayu = require('nodepayu')();

nodepayu.post('<URL>', (res) => {
  console.log(response);
}, (err) => {
  console.log(err);
});
```
