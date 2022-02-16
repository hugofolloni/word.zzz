import { useEffect, useState } from 'react';
import GameLine from './GameLine.js';
import styled from 'styled-components';

const jsonFile = require('./wordszzz.json');

const Game = () => {

  const [word, setWord] = useState(null);

  useEffect(() => {
    var wordsArray = [];

    for(let i = 0; i < jsonFile.length; i++){
        if(jsonFile[i].Freq > 20){
            wordsArray.push(jsonFile[i].Name);
        }
    }
        
    const num = Math.floor(Math.random() * wordsArray.length);
    const theWord = wordsArray[num].toString();
    setWord(theWord.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""));
    console.log(theWord);
  }, []);

  console.log("Re-render")

  const GameArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

    return ( 
        <GameArea>
          <GameLine word={word} index={1}/>
          <GameLine word={word} index={2}/>
          <GameLine word={word} index={3}/>
          <GameLine word={word} index={4}/>
          <GameLine word={word} index={5}/>
          <GameLine word={word} index={6}/>
        </GameArea>
     );
}
 
export default Game;