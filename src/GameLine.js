import { useEffect, useState } from 'react';
import styled from 'styled-components';

const GameLine = (props) => {

    const [wordArray, setWordArray] = useState([]);
    useEffect(() => {
        console.log(props.word);
        const word = props.word;
        if(word !== null){
            setWordArray(word.split(''));
        }
    }, [props.word]);
    
  
    const checkTry = () => {
        var colors = [];
        const userGuess = firstLetter + ' ' + secondLetter + ' ' + thirdLetter + ' ' + fourthLetter + ' ' + fifthLetter;
        const splitTry = userGuess.toUpperCase().split(' ');
        var stringToCompare = '';
        for(let i = 0; i < wordArray.length; i++){
            if(splitTry[i] === wordArray[i]){
                stringToCompare += 'green ';
                colors.push('green');
            }
            else if(wordArray.indexOf(splitTry[i]) !== -1){
                stringToCompare += 'yellow ';
                colors.push('yellow');
            }
            else{
                stringToCompare += 'red ';
                colors.push('red');
            }
        }
        console.log(stringToCompare)
        setColorsArray(colors);
    }

    const [firstLetter, setFirstLetter] = useState(null);
    const [secondLetter, setSecondLetter] = useState(null);
    const [thirdLetter, setThirdLetter] = useState(null);
    const [fourthLetter, setFourthLetter] = useState(null);
    const [fifthLetter, setFifthLetter] = useState(null);

    const [colorsArray, setColorsArray] = useState([]); 

    const BoxesDiv = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 30%;
        `

    const Box = styled.input`
        display: flex;
        width: 50px;
        height: 50px;
        border: 1px solid black;
        border-radius: 10px;
        margin: 5px;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        text-align: center;
    `
    
    const Box1 = styled(Box)`
        background-color: ${colorsArray[0]};
    `

    return ( 
        <BoxesDiv>
            <Box1 type="text" onChange={(e) => setFirstLetter(e.target.value)}/> 
            <Box type="text" onChange={(e) => setSecondLetter(e.target.value)} />
            <Box type="text" onChange={(e) => setThirdLetter(e.target.value)} /> 
            <Box type="text" onChange={(e) => setFourthLetter(e.target.value)}/>
            <Box type="text" onChange={(e) => setFifthLetter(e.target.value)}/>
            <button onClick={ () => checkTry() }>Try</button>
        </BoxesDiv>  
    );
}
 

export default GameLine;
