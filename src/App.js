import React, { useState } from 'react';

import './style.css'

function App() {

  const [ tarefa, setTarefa ] = useState({ titulo: '', conteudo: '' });
  const [ tarefas, setTarefas ] = useState([]);

  function handleInputTitulo(e) {
    setTarefa({
      titulo: e.target.value,
      conteudo: tarefa.conteudo
    });
  }

  function handleInputConteudo(e) {
    setTarefa({
      titulo: tarefa.titulo,
      conteudo: e.target.value
    });
  }

  function handleClick(e) {
    e.preventDefault();

    setTarefas([].concat(tarefas, tarefa));
    setTarefa({titulo: '', conteudo: ''});
  }
  
  return (
    <div className="App">
      <div className="container">
        <div className="formInput">
          <form>
            <div>
              <input 
                type="text" placeholder="Título" 
                value={tarefa.titulo}
                onChange={handleInputTitulo}
              /><br/>
            </div>
            <div>
              <input 
                type="text" placeholder="Conteúdo" 
                value={tarefa.conteudo}
                onChange={handleInputConteudo}
              /><br/>
            </div>
            <div>
              <button onClick={handleClick}>Add note</button>
            </div>
          </form>
        </div>

        <div className="result">
          <ul>
            {tarefas.map((item, index) => {
              return(
                <li key={index}>
                  <h3>{item.titulo}</h3>
                  <p>{item.conteudo}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
