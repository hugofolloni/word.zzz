import GameLine from './GameLine.js';
import styled from 'styled-components';

const GameArea = (props) => {

    const word = props.word;
    const everyWordArray = props.everyWordArray;

    const GameArea = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70vh;
        height: 70vh;
    `

    localStorage.setItem("userGames", JSON.stringify(['t', 'x', 'x', 'x', 'x', 'x']));

    window.addEventListener('load', () => {
      const setFocus = document.getElementById(`box0-1`);
      setFocus.focus();
    });
    
    return ( 
        <GameArea>
          <GameLine word={word} index={0} everyWordArray={everyWordArray} />
          <GameLine word={word} index={1} everyWordArray={everyWordArray} />
          <GameLine word={word} index={2} everyWordArray={everyWordArray} />
          <GameLine word={word} index={3} everyWordArray={everyWordArray} />
          <GameLine word={word} index={4} everyWordArray={everyWordArray} />
          <GameLine word={word} index={5} everyWordArray={everyWordArray} />
        </GameArea>
     );
}
 
export default GameArea;