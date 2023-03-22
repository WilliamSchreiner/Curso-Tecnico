import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'; // rotas e routes

// import das functios 
import { TarefaLista } from './components/exercicio/TarefaLista'; // import para a Lista
import { Home } from './components/home/Home' // import para o Home
import { TarefaCadastro } from './components/exercicio/TarefaCadastro';// import para o Cadastro

function App() {
  return (
    <>
    <div className='container-page'>
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
    <h1 className='h1_title'>TraceFit</h1>

    <div className="collapse navbar-collapse" id="navbarNav">

    <ul className="navbar-nav">
    <li className="nav-item"> <a className="nav-link active"> <Link to={'/'} className='link'> Home </Link> </a></li>
    <li className="nav-item"> <a className="nav-link active"> <Link to={'/tarefa'} className='link'> Seus exercicio </Link> </a></li>
    </ul>
    </div>
    </div> 
    </nav>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarefa" element={<TarefaLista />} />
        <Route path="/tarefa/cadastro" element={<TarefaCadastro />} />
        <Route path="/tarefa/cadastro/:id" element={<TarefaCadastro />} /> 
    </Routes>
   
    
    </div>
    </>
    
  );
}

export default App; // forma de exportar as funçoes ex: App
