const pool = require("./pool");

async function getMessages() {
  let { rows } = await pool.query("SELECT*FROM messagelist");
  return rows;
}

async function postmessage(username, usermessage) {
  await pool.query(`INSERT INTO messagelist (msg,name) VALUES (($1),($2))`, [
    usermessage,
    username,
  ]);
}

async function getmsg(Id) {
  const numberedvalue = Number(Id);
  const { rows } = await pool.query(`SELECT*FROM messagelist WHERE id=1`);
  return rows;
}

module.exports = {
  getMessages,
  postmessage,
  getmsg,
};
