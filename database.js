const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./banco.db");

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT,
        senha TEXT,
        nome_usuario TEXT,
        prontuario TEXT
    )`);
});

module.exports = db;