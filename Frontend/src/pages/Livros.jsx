import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Livros = () => {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        const obterLivros = async () => {
            try {
                const res = await axios.get("http://localhost:8800/livros");
                setLivros(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        obterLivros();
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8800/livros/" + id);
            window.location.reload()
        } catch (err) {
            console.log("Erro ao deletar livro: ", err);
        }
    }

    return (
        <div>
            <h1>CRUD Livros</h1>
            <div className="livros">
                {livros.map(livro => (
                    <div className="livro" key={livro.id}>
                        {livro.capa && <img src={livro.capa} alt="" />}
                        <h2>{livro.titulo}</h2>
                        <p>{livro.desc}</p>
                        <span>{livro.preco}</span>
                        <button className="deletar" onClick={() => handleDelete(livro.id)}>Deletar</button>
                        <button className="atualizar"><Link to={`/update/${livro.id}`}>Atualizar</Link></button>
                    </div>
                ))}
            </div>
            <button><Link to="/add">Adicionar novo Livro</Link></button>
        </div>
    )
}

export default Livros