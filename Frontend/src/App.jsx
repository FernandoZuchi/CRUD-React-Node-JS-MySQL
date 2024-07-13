import { useState } from 'react'
import Livros from './pages/Livros';
import Atualizar from './pages/Atualizar';
import Add from './pages/Add';
import "./style.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Livros/>}></Route>
          <Route path='/add' element={<Add/>}></Route>
          <Route path='/update/:id' element={<Atualizar/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App
