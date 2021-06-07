const express = require('express')
const logindb= require('./login-db.js');

module.exports.login = async (req,res) => {
  res.json(await logindb.loginjson())
}
