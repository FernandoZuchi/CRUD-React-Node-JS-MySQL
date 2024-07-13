import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Atualizar = () => {
  const [livro, setLivro] = useState({
    titulo: "",
    desc: "",
    preco: null,
    capa: "",
  });

  const navigate = useNavigate()
  const location = useLocation();

  const livroId = location.pathname.split("/")[2]

  const handleChange = (e) => {
    setLivro(anterior => ({ ...anterior, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/livros/" + livroId, livro);
      navigate("/")
    } catch (err) {
      console.log("Erro ao atualizar livro: ", err);
    }
  }


  return (
    <div className="form">
      <h1>Atualizar livro existente</h1>
      <input type="text" placeholder='Titulo' onChange={handleChange} name='titulo' />
      <input type="text" placeholder='Descrição' onChange={handleChange} name='desc' />
      <input type="number" placeholder='Preço' onChange={handleChange} name='preco' />
      <input type="text" placeholder='Capa' onChange={handleChange} name='capa' />
      <button onClick={handleClick} className='formButton'>Atualizar livro</button>
    </div>
  )
}

export default Atualizar