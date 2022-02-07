import { useState } from 'react';
import UX from './UX.js';

const jsonFile = require('./wordszzz.json');

function App() {

  var wordsArray = [];

  for(let i = 0; i < jsonFile.length; i++){
      if(jsonFile[i].Freq > 20){
          wordsArray.push(jsonFile[i].Name);
      }
  }

  const [word, setWord] = useState(null);

  const pickWord = () => {
    const num = Math.floor(Math.random() * wordsArray.length);
    const theWord = wordsArray[num].toString();
    setWord(theWord.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
  }

  window.addEventListener('load', pickWord);

  return (
    <div className="App">
      <header className="App-header">
       <h1>Word.zzz</h1>
      </header>
      <UX word={word} />
    </div>
  );
}

export default App;
