import { useEffect, useState } from 'react';
import GameArea from './GameArea.js';

import styled from 'styled-components';

const jsonFile = require('./wordszzz.json');

const Game = () => {

  const [word, setWord] = useState(null);

  const everyWordArray = [];

  for(let i = 0; i < jsonFile.length; i++){
    everyWordArray.push(jsonFile[i].Name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
  }

  useEffect(() => {

    var wordsArray = [];

    for(let i = 0; i < jsonFile.length; i++){
        if(jsonFile[i].Freq > 20){
            wordsArray.push(jsonFile[i].Name);
        }
    }
        
    const num = Math.floor(Math.random() * wordsArray.length);
    const theWord = wordsArray[num].toString();
    setWord(theWord.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
  }, []);
  
    const Container = styled.div`
      width: 100%vh;
      height: 70vh;
      display: flex;
      justify-content: center;
      align-items: center;
    `

    return ( 
      <Container>
         <GameArea word={word} everyWordArray={everyWordArray} />
      </Container>
     );
}
 
export default Game;