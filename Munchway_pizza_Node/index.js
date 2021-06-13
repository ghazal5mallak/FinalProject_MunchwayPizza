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
const session = require('express-session');


// GET method route
const jsonParser = express.json()

// Init the session
app.use(session({ secret: 'keyboard matnot', cookie: { maxAge: 6000000 } }))
app.use(express.static(__dirname + '/userid'));
app.use(express.static(__dirname + '/first_name'));
app.use(express.static(__dirname + '/last_name'));
app.use(express.static(__dirname + '/email'));
app.use(express.static(__dirname + '/phone'));
app.use(express.static(__dirname + '/admin'));
app.use(express.static(__dirname + '/picture_url'));

// Access the session as req.session
app.post('/login', jsonParser, async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    if (req.session.userid) {
      return res.send({ res: "You are already logged in please logout" });
    } else {
      result = await DB.query(`SELECT * FROM \`user\` WHERE \`email\`='${email}' and \`password\`='${password}'`);
      if (result.length !== 0) {
        req.session.userid = result[0]['iduser'];
        req.session.first_name = result[0]['fname'];
        req.session.last_name = result[0]['lname'];
        req.session.email = result[0]['email'];
        req.session.phone = result[0]['number'];
        req.session.admin = result[0]['admin'];
        req.session.picture_url = result[0]['picture_url'];
        return res.send({ res: true })
      }
      return res.send({ res: "Incorrect email or password" });
    }
  } else {
    return res.send({ res: "You need to enter the email and password" });
  }
});

app.get('/logout', (req, res) => {
  if (req.session.userid) {
    req.session.destroy((err) => {
      if (err) {
        return res.send(err);
      }
      return res.send({ res: true });
    });
  } else {
    return res.send({ res: false });
  }
});

app.get('/home', home.home)
app.get('/feedback', feedback.feedback)
app.get('/tafrit', tafrit.tafrit)
app.get('/order', order.order)
app.get('/login', login.login)
app.get('/signup', signup.signup)
app.get('/tmonot', tmonot.tmonot)

app.post('/feedback', jsonParser, async (req, res) => {
  if (!req.session || !req.session.userid) {
    res.json({"error": "Something went wrong"});
  }
  itemToAdd = req.body;
  result = await DB.query(`INSERT INTO \`feedback\` VALUES('${itemToAdd.message}', NOW(), NULL, ${req.session.userid})`);
  res.json({ "id": result.insertId });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
