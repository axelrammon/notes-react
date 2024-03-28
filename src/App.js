// app.js

// Importando React e Hook useState
import React, { useState } from 'react';

// Importando estilos CSS
import './estilo.css';

// Componente principal App
function App() {
  // Separando estado tarefa em inputTarefa e tarefas
  const [inputTarefa, setInputTarefa] = useState({ titulo: '', conteudo: '' });
  const [tarefas, setTarefas] = useState([]);

  // Função para lidar com mudanças no input de título
  function handleInputTitulo(e) {
    setInputTarefa({
      ...inputTarefa,
      titulo: e.target.value // Atualizando apenas o título
    });
  }

  // Função para lidar com mudanças no input de conteúdo
  function handleInputConteudo(e) {
    setInputTarefa({
      ...inputTarefa,
      conteudo: e.target.value // Atualizando apenas o conteúdo
    });
  }

  // Função para adicionar uma nova tarefa
  function handleClick(e) {
    e.preventDefault();

    // Verificando se tanto o título quanto o conteúdo estão vazios
    if (inputTarefa.titulo.trim() === '' && inputTarefa.conteudo.trim() === '') {
      return;
    }

    // Adicionando a nova tarefa apenas se o título não estiver vazio
    const novaTarefa = {
      titulo: inputTarefa.titulo.trim() !== '' ? inputTarefa.titulo : 'Untitled', // Definindo 'Untitled' se o título estiver vazio
      conteudo: inputTarefa.conteudo.trim() !== '' ? inputTarefa.conteudo : 'No content' // Definindo 'No content' se o conteúdo estiver vazio
    };

    setTarefas([...tarefas, novaTarefa]); // Adicionando a nova tarefa
    setInputTarefa({ titulo: '', conteudo: '' }); // Limpando os inputs após adicionar a tarefa
  }

  // Renderização do componente App
  return (
    <div className="App">
      <div className="container">
        <div className="formInput">
          <form>
            <div>
              <input
                type="text"
                placeholder="Título (max: 25)"
                value={inputTarefa.titulo}
                onChange={handleInputTitulo}
                maxLength={25}
              /><br />
            </div>
            <div>
              <input
                type="text"
                placeholder="Conteúdo (max: 300)"
                value={inputTarefa.conteudo}
                onChange={handleInputConteudo}
                maxLength={300}
              /><br />
            </div>
            <div>
              <button onClick={handleClick}>Add note</button>
            </div>
          </form>
        </div>

        <div className="result">
          <ul>
            {/* Mapeando e renderizando as tarefas */}
            {tarefas.map((item, index) => (
              <div key={index} className="tarefa">
                <li>
                  <h3>{item.titulo}</h3>
                  <p>{item.conteudo}</p>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
