import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
  const [livro, setLivro] = useState({
    titulo: "",
    desc: "",
    preco: null,
    capa: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setLivro(anterior => ({ ...anterior, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/livros", livro);
      navigate("/")
    } catch (err) {
      console.log("Erro ao cadastrar livro: ", err);
    }
  }


  return (
    <div className="form">
      <h1>Adicionar novo livro</h1>
      <input type="text" placeholder='Titulo' onChange={handleChange} name='titulo' />
      <input type="text" placeholder='Descrição' onChange={handleChange} name='desc' />
      <input type="number" placeholder='Preço' onChange={handleChange} name='preco' />
      <input type="text" placeholder='Capa' onChange={handleChange} name='capa' />
      <button onClick={handleClick} className='formButton'>Cadastrar livro</button>
    </div>
  )
}

export default Add