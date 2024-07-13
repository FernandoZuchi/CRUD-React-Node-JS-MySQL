import express from "express"
import mysql from "mysql2"
import cors from "cors";

const app = express()
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
})



app.get("/", (req, res) => {
    res.json("Olá, aqui é o backend");
})

app.get("/livros", (req, res) => {
    const q = "SELECT * FROM livros"
    db.query(q, (err, data) => {
        if (err) return res.json("Erro ao fazer consulta")
        return res.json(data)
    })
})

app.post("/livros", (req, res) => {
    const q = "INSERT INTO livros (`titulo`,`desc`,`preco`,`capa`) VALUES (?)";
    const values = [req.body.titulo, req.body.desc, req.body.preco, req.body.capa];
    db.query(q, [values], (err, data) => {
        if (err) return res.json("Erro ao fazer consulta")
        return res.json("Livro cadastrado no banco de dados.")
    });
})

app.delete("/livros/:id", (req,res)=>{
    const livroId = req.params.id;

    const q = "DELETE FROM livros WHERE id = ?";
    db.query(q, [livroId], (err,data)=> {
        if (err) return res.json("Erro ao deletar livro");
        return res.json("Livro deletado do banco de dados.");
    })
})

app.put("/livros/:id", (req,res)=>{
    const livroId = req.params.id;

    const q = "UPDATE livros SET `titulo` = ?, `desc` = ?, `preco` = ?, `capa` = ? WHERE id = ?";

    const values = [req.body.titulo, req.body.desc, req.body.preco, req.body.capa];
    
    db.query(q, [...values, livroId], (err,data)=> {
        if (err) return res.json("Erro ao atualizar livro");
        return res.json("Livro atualizado no banco de dados.");
    })
})


app.listen(8800, () => {
    console.log("Conectado ao backend.");
})