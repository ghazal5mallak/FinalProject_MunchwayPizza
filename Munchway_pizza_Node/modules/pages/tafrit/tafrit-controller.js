const express = require('express')
const tafritdb= require('./tafrit-db.js');

module.exports.tafrit = async (req,res) => {
  res.json(await tafritdb.tafritjson())
}
