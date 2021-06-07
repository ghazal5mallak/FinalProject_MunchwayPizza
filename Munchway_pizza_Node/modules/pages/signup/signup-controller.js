const express = require('express')
const signupdb= require('./sighnup-db.js');

module.exports.signup = async (req,res) => {
  res.json( await signupdb.signupjson())
}
