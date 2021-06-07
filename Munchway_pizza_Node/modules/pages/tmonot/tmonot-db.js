const express = require('express')
const header = require('../../parts/header/header-controller.js')
const footer = require('../../parts/footer/footer-controller.js')
const DB = require('../../../general-db');

let Content = async ()=>{
  return await DB.query("SELECT * FROM `galleryitems`");
}

module.exports.tmonotjson = async ()=>{
  return JSON.parse('{"Header":'+JSON.stringify(await header.Header())
  +',"Content":'+JSON.stringify(await Content())
  +',"Footer":'+JSON.stringify(await footer.Footer())+"}")
}
