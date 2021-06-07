const express = require('express')
const homedb= require('./home-db.js');


module.exports.home = async (req,res) => {
  res.json(await homedb.homejson())
}
