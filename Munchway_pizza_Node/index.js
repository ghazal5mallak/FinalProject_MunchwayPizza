const express = require('express')
const app = express();
const port = 8000;
const signup = require('./modules/pages/signup/signup-controller.js');
const login = require('./modules/pages/login/login-controller.js');
const home = require('./modules/pages/home/home-controller.js');
const feedback = require('./modules/pages/feedback/feedback-controller.js');
const tafrit = require('./modules/pages/tafrit/tafrit-controller.js');
const order = require('./modules/pages/order/order-controller.js');
const tmonot = require('./modules/pages/tmonot/tmonot-controller.js');
const DB = require('./general-db.js');

app.get('/home', home.home)
app.get('/feedback', feedback.feedback)
app.get('/tafrit', tafrit.tafrit)
app.get('/order', order.order)
app.get('/login', login.login)
app.get('/signup', signup.signup)
app.get('/tmonot', tmonot.tmonot)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
