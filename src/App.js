import { useEffect, useState } from 'react';
import GameLine from './GameLine.js';
import styled from 'styled-components';

const jsonFile = require('./wordszzz.json');

function App() {

  var wordsArray = [];

  for(let i = 0; i < jsonFile.length; i++){
      if(jsonFile[i].Freq > 20){
          wordsArray.push(jsonFile[i].Name);
      }
  }

  const [word, setWord] = useState(null);

  useEffect(() => {
    const num = Math.floor(Math.random() * wordsArray.length);
    const theWord = wordsArray[num].toString();
    setWord(theWord.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
    console.log(theWord);
  }, []);

  const GameArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 60%;
    `

  return (
    <div className="App" style={ {display: 'flex', justifyContent: 'center', width: '100vw', height: '100vh'} }>
      <header className="App-header">
       <h1>Word.zzz</h1>
      </header>
      <GameArea>
        <GameLine word={word} />
      </GameArea>
    </div>
  );
}

export default App;
