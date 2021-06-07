const express = require('express')
const navbar = require('./header-db.js')



module.exports.Header= async () => {
  return (await navbar.HeaderJson())
}