// index.js

const config = require('./config/config.json');
const models = require('./models/index');
console.log(config.name);
var user = new models.User();
var product = new models.Product();

