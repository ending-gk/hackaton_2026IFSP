const express = require("express");
const db = require("./database");

const app = express();

app.use(express.json());
app.use(express.static("."));

app.post("/usuarios", (req, res) => {
    const { email, senha, nome_usuario, prontuario } = req.body;

    db.run(
        "INSERT INTO usuarios (email, senha, nome_usuario, prontuario) VALUES (?, ?, ?, ?)",
        [email, senha, nome_usuario, prontuario],
        function (err) {
            if (err) return res.status(500).json({ erro: err.message });
            res.json({ sucesso: true, id: this.lastID });
        }
    );
});

app.listen(3000, () => console.log("Rodando em http://localhost:3000"));