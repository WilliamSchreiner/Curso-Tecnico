import React from 'react';
import './App.css';
import { Home } from './components/home/Home' // import para Home
import { AvatarLista } from './components/avatar/AvatarLista' // import para Home
import { AvatarCadastro } from './components/avatar/AvatarCadastro' // import para Home

import { Link, Route, Routes } from 'react-router-dom'; // import para index das Route e Routes

function App() {
  return (
    <>
    <h1> Olá avatar </h1>

    <ul>
      <li> <Link to={'/'}>Home</Link></li>
      <li> <Link to={'/avatar'}>Avatar</Link></li>
    </ul>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avatar" element={< AvatarLista />} />
        <Route path="/avatar/cadastro" element={< AvatarCadastro />} />
    </Routes>

    </>
  );
}

export default App; // forma de exportar as funçoes ex: App
