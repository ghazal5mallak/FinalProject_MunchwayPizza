const HeaderJson = require('./navbar/navbar.json')
const DB = require('../../../general-db');


let MenuItems =async () => {
  return await DB.query("SELECT *FROM menulist INNER JOIN menuitems ON menulist.id=menuitems.menu_id AND menulist.id = 1");
  }

  


module.exports.HeaderJson=async () => {
    return JSON.parse('{"MenuItems":'+JSON.stringify(await MenuItems())+"}")
}
