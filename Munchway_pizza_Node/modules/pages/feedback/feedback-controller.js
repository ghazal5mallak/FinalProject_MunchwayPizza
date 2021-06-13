const express = require('express')
const feedbackdb= require('./feedback-db.js');

module.exports.feedback =async (req,res) => {
  res.json(await feedbackdb.feedbackjson(req))
}
