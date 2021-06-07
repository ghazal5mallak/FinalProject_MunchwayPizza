const express = require('express')
const footer = require('./footer-db.js')


module.exports.Footer= async () => {
  return(await footer.FooterJson())
}