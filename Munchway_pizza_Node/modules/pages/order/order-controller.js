const express = require('express')
const orderdb= require('./order-db.js');

module.exports.order = async (req,res) => {
  res.json(await orderdb.orderjson())
}