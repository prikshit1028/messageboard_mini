const { Client } = require("pg");

const client = new Client({
  connectionString: process.argv[2],
});

const myQuery = `
CREATE TABLE IF NOT EXISTS messagelist (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
msg VARCHAR(255),name TEXT,dateof TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP);

INSERT INTO messagelist (msg,name) VALUES ('Hi there','Amando');
INSERT INTO messagelist (msg,name) VALUES ('Hello world','Charles');
INSERT INTO messagelist (msg,name) VALUES ('Whats up bitches','Becky');
INSERT INTO messagelist (msg,name) VALUES ('The winter is coming','Amy');
INSERT INTO messagelist (msg,name) VALUES ('The dog gone rogue','Jeremiah');

`;

async function main() {
  console.log("seeding");

  await client.connect();
  await client.query(myQuery);
  await client.end();

  console.log("complete");
}

main();
