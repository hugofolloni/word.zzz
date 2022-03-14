import { useEffect, useState } from 'react';
import SixGameArea from './SixGameArea.js';

import styled from 'styled-components';

const jsonFile = require('../scripts/words6.json');

const Six = () => {

  const [word, setWord] = useState(null);
  const [utf8Word, setUtf8Word] = useState(null);

  const everyWordArray = [];

  if(localStorage.getItem('games6') === null) {
    localStorage.setItem('games6', 0);
    localStorage.setItem('wins6', 0);
  }


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
    setUtf8Word(theWord.toLowerCase());
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
         <SixGameArea word={word} everyWordArray={everyWordArray} utf8Word={utf8Word} />
      </Container>
     );
}
 
export default Six;