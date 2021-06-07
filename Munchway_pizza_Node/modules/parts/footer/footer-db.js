const footerjson = require('./footer.json')
const DB = require('../../../general-db');

let FooterItems =async () => {
  return await DB.query("SELECT *FROM menulist INNER JOIN menuitems ON menulist.id=menuitems.menu_id AND menulist.id = 2");
  }


module.exports.FooterJson=async () => {
  return JSON.parse('{"FooterItems":'+JSON.stringify(await FooterItems())+"}")
}
