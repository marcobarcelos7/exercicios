import { InfoCard } from './components/InfoCard';
import { HobbyList } from './components/HobbyList';
import React, { useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const listaHobbies = ["Jogar", "Ver anime", "Programar"];
  const [contador, setContador] = useState(0);
  const [text, setText] = useState("");
  const changeEvent = (event) => {
    setText(event.target.value)
  }

  return (
    <div className="App">
      {/* Crie um componente chamado InfoCard, um cartão de informação que possui as props title (título) e description (descrição). Chame esse componente no seu App para renderizá-lo. */}
      <InfoCard title={"Titulo "} description={"Descriçao"}></InfoCard>

      {/* Crie outro componente chamado HobbyList, este componente deve receber a prop hobbies (uma lista de hobbies do usuário), renderize uma lista (ul) que exiba cada hobby como um item (li). */}
      <HobbyList hobbies={listaHobbies}></HobbyList>

      {/* Crie um campo de entrada que exiba em tempo real o texto digitado.
      Use o useState para controlar o valor. */}
      <input
       onChange={changeEvent} 
       ></input>
      <p>{text}</p>

      {/* Crie um botão que, ao ser clicado, mostre quantas vezes ele foi clicado. */}
      <button onClick={() => setContador(contador + 1)}>Contador: {contador}</button>
    </div>
  );
}

export default App;
