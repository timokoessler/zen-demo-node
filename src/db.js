const sqlite3 = require('sqlite3');
const { promisify } = require('util');

const db = new sqlite3.Database(':memory:');

const execAsync = promisify(db.exec).bind(db);
const allAsync = promisify(db.all).bind(db);

async function initDatabase() {
  await execAsync(`
    CREATE TABLE IF NOT EXISTS pets (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      name TEXT,
      owner TEXT
    );
  `);
  await execAsync('DELETE FROM pets;');
}

module.exports = {
  initDatabase,
  dbExecAsync: execAsync,
  dbAllAsync: allAsync,
};
