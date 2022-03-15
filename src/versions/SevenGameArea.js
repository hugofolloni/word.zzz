import SevenGameLine from './SevenGameLine.js';
import styled from 'styled-components';

const SevenGameArea = (props) => {

    const word = props.word;
    const everyWordArray = props.everyWordArray;
    const utf8Word = props.utf8Word;

    const GameArea = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70vh;
        height: 70vh;
    `

    localStorage.setItem("user7Games", JSON.stringify(['t', 'x', 'x', 'x', 'x', 'x', 'x', 'x']));

    window.addEventListener('load', () => {
      const setFocus = document.getElementById(`box0-1`);
      setFocus.focus();
    });
    
    return ( 
        <GameArea>
          <SevenGameLine word={word} index={0} everyWordArray={everyWordArray} utf8Word={utf8Word}/>
          <SevenGameLine word={word} index={1} everyWordArray={everyWordArray} utf8Word={utf8Word}/>
          <SevenGameLine word={word} index={2} everyWordArray={everyWordArray} utf8Word={utf8Word}/>
          <SevenGameLine word={word} index={3} everyWordArray={everyWordArray} utf8Word={utf8Word}/>
          <SevenGameLine word={word} index={4} everyWordArray={everyWordArray} utf8Word={utf8Word}/>
          <SevenGameLine word={word} index={5} everyWordArray={everyWordArray} utf8Word={utf8Word}/>
          <SevenGameLine word={word} index={6} everyWordArray={everyWordArray} utf8Word={utf8Word}/>
          <SevenGameLine word={word} index={7} everyWordArray={everyWordArray} utf8Word={utf8Word}/>
        </GameArea>
     );
}
 
export default SevenGameArea;