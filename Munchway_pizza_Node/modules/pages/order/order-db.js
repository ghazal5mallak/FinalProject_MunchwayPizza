const header = require('../../parts/header/header-controller.js')
const footer = require('../../parts/footer/footer-controller.js')
const DB = require('../../../general-db');

let Content = async () => {
  // return (orderjson)
  // questions = await DB.query("SELECT * FROM ((`optionorder` INNER JOIN `order` ON optionorder.orderID = order.orderID) INNER JOIN `optionitems` ON optionorder.orderID = optionitems.orderID) where order.orderID = 1");
  const output = []
  questions = await DB.query("SELECT * FROM `order`");
  for (let i = 0; i < questions.length; i++) {
    question = questions[i];
    question['options'] = await DB.query("SELECT * FROM `optionitems` WHERE orderID = " + question['orderID']);
    output.push(question);
  }
  return output;
}

module.exports.orderjson =async ()=>{
  return JSON.parse('{"Header":'+JSON.stringify(await header.Header())
  + ',"Content":' + JSON.stringify(await Content())
  +',"Footer":'+JSON.stringify(await footer.Footer())+"}")
}
