import GameLine from './GameLine.js';
import styled from 'styled-components'

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

    return ( 
        <GameArea>
          <GameLine word={word} index={1} everyWordArray={everyWordArray}/>
          <GameLine word={word} index={2} everyWordArray={everyWordArray}/>
          <GameLine word={word} index={3} everyWordArray={everyWordArray}/>
          <GameLine word={word} index={4} everyWordArray={everyWordArray}/>
          <GameLine word={word} index={5} everyWordArray={everyWordArray}/>
          <GameLine word={word} index={6} everyWordArray={everyWordArray}/>
        </GameArea>
     );
}
 
export default GameArea;