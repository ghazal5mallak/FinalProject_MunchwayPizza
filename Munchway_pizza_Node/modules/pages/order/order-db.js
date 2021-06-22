const header = require('../../parts/header/header-controller.js')
const footer = require('../../parts/footer/footer-controller.js')
const DB = require('../../../general-db');

let Content = async () => {
  const output = []
  questions = await DB.query("SELECT * FROM `order`");
  for (let i = 0; i < questions.length; i++) {
    question = questions[i];
    question['options'] = await DB.query("SELECT * FROM `optionitems` WHERE orderID = " + question['orderID']);
    output.push(question);
  }
  const catNav = await DB.query("SELECT * FROM `categories` ORDER BY `index`");
  const categories = [];
  for (let i = 0; i < catNav.length; i++) {
    if (!categories[i]) {
      categories[i] = {};
      categories[i]['options'] = [];
    }
    categories[i]['questions'] = await DB.query(`SELECT \`question\`,\`id\` FROM \`questions\` WHERE catID=${catNav[i].id} ORDER BY \`index\``);
    for (let j = 0; j < categories[i]['questions'].length; j++) {
      categories[i]['options'].push(await DB.query(`SELECT * FROM \`options\` WHERE \`catID\`=${catNav[i].id} AND \`questionID\`=${categories[i].questions[j].id}`));
    }
  }
  return { catNav, categories };
}

module.exports.orderjson =async ()=>{
  return JSON.parse('{"Header":'+JSON.stringify(await header.Header())
  + ',"Content":' + JSON.stringify(await Content())
  +',"Footer":'+JSON.stringify(await footer.Footer())+"}")
}
