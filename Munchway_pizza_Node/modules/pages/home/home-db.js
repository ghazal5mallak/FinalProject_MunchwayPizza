const express = require('express')
const header = require('../../parts/header/header-controller.js')
const footer = require('../../parts/footer/footer-controller.js')
const DB = require('../../../general-db');


module.exports.homejson = async ()=>{
  return JSON.parse('{"Header":'+JSON.stringify(await header.Header())
  +',"Footer":'+JSON.stringify(await footer.Footer())+"}")
}
