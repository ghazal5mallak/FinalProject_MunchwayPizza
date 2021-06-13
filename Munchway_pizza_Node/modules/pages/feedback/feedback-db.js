const express = require('express')
const header = require('../../parts/header/header-controller.js')
const footer = require('../../parts/footer/footer-controller.js')
const DB = require('../../../general-db');

let Content = async () => {
  return await DB.query("SELECT * FROM feedback JOIN user ON feedback.userid = user.iduser");
}

module.exports.feedbackjson = async (req)=>{
  return JSON.parse('{"Header":'+JSON.stringify(await header.Header())
  + ',"Content":' + JSON.stringify(await Content())
    + ',"picture_url":' + (JSON.stringify(req.session.picture_url) || false)
  +',"Footer":'+JSON.stringify(await footer.Footer())+"}")
}
