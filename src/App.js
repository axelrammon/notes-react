import React, { useState } from 'react';

import './estilo.css';

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
    
    if (tarefa.titulo !== '') {
      setTarefas([].concat(tarefas, tarefa));
    } else {
      tarefa.titulo = 'Untitled'
      setTarefas([].concat(tarefas, tarefa));
    }
    
    if (tarefa.conteudo !== '') {
      setTarefas([].concat(tarefas, tarefa));
    } else {
      tarefa.conteudo = 'No content'
    setTarefas([].concat(tarefas, tarefa));    
    }
  

    setTarefa({titulo: '', conteudo: ''});
  }
  
  return (
    <div className="App">
      <div className="container">
        <div className="formInput">
          <form>
            <div>
              <input 
                type="text" placeholder="Título (max: 25)" 
                value={tarefa.titulo}
                onChange={handleInputTitulo}
                maxLength={25}
              /><br/>
            </div>
            <div>
              <input 
                type="text" placeholder="Conteúdo (max: 300)" 
                value={tarefa.conteudo}
                onChange={handleInputConteudo}
                maxLength={300}
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
                <div  key={index} className="tarefa">
                  <li>
                    <h3>{item.titulo}</h3>
                    <p>{item.conteudo}</p>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
