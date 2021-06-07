const express = require('express')
const tmonotdb= require('./tmonot-db.js');

module.exports.tmonot = async (req,res) => {
  res.json(await tmonotdb.tmonotjson())
}
