import { useEffect, useState } from 'react';
import styled from 'styled-components';

const GameLine = (props) => {

    const [wordArray, setWordArray] = useState([]);
    useEffect(() => {
        const word = props.word;
        if(word !== null){
            setWordArray(word.split(''));
        }
        console.log(word);
    }, [props.word]);

    const lineIndex = props.index;
    
  
    const checkTry = () => {
        var colors = ["", "", "", "", ""];
        const splitTry = wordsArray;
        const userGuess = splitTry;

        setFirstLetter(userGuess[0]);
        setSecondLetter(userGuess[1]);
        setThirdLetter(userGuess[2]);
        setFourthLetter(userGuess[3]);
        setFifthLetter(userGuess[4]);

        console.log(splitTry);
        
        for(let i = 0; i < wordArray.length; i++){
            if(splitTry[i] === wordArray[i]){
                colors[i] = 'green';
            }
            else if((wordArray.indexOf(splitTry[i]) !== -1) && !findDuplicate(wordArray, splitTry[i])){
                colors[i] = 'yellow';
            }
            else{
                colors[i] = 'red';
            }
        }

        setColorsArray(colors);
        setColorsArray(colors);
        setIsDisabled(true);

    }

    const findDuplicate = (array, value) => {
        for(let i = 0; i < array.length; i++){
            if(array[i] === value){
                return true;
            }
            else{
                return false;
            }
        }
    }

    const [firstLetter, setFirstLetter] = useState(null);
    const [secondLetter, setSecondLetter] = useState(null);
    const [thirdLetter, setThirdLetter] = useState(null);
    const [fourthLetter, setFourthLetter] = useState(null);
    const [fifthLetter, setFifthLetter] = useState(null);


    const [colorsArray, setColorsArray] = useState([]); 

    const [isDisabled, setIsDisabled] = useState(false);

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
        color: white;
        background-color: #2e2e2e;
    `
    
    const Box1 = styled(Box)`
        background-color: ${colorsArray[0]};
    `

    const Box2 = styled(Box)`
        background-color: ${colorsArray[1]};
    `

    const Box3 = styled(Box)`
        background-color: ${colorsArray[2]};
    `

    const Box4 = styled(Box)`
        background-color: ${colorsArray[3]};
    `

    const Box5 = styled(Box)`
        background-color: ${colorsArray[4]};
    `

    const wordsArray = [" ", " ", " ", " ", " "];

    const handleNextInput = (e) => {
        if(e.target.value.length === 1){
            const fieldName = parseInt(e.target.id.split('-')[1]);
            wordsArray[fieldName - 1] = e.target.value.toUpperCase();
            const nextSibiling = document.getElementById(`box${lineIndex}-${parseInt(fieldName) + 1}`);
            if(nextSibiling !== null){
                nextSibiling.focus();
            }
        }
    }


    return ( 
        <BoxesDiv>
            <Box1 type="text" id={ `box${lineIndex}-1`} disabled={isDisabled} value={firstLetter} onChange={(e) => handleNextInput(e) } maxLength='1' /> 
            <Box2 type="text" id={ `box${lineIndex}-2`} disabled={isDisabled} value={secondLetter} onChange={(e) => handleNextInput(e) } maxLength='1'/>
            <Box3 type="text" id={ `box${lineIndex}-3`} disabled={isDisabled} value={thirdLetter} onChange={(e) => handleNextInput(e) } maxLength='1' /> 
            <Box4 type="text" id={ `box${lineIndex}-4`} disabled={isDisabled} value={fourthLetter} onChange={(e) => handleNextInput(e) } maxLength='1'  />
            <Box5 type="text" id={ `box${lineIndex}-5`} disabled={isDisabled} value={fifthLetter} onChange={(e) => handleNextInput(e) } maxLength='1' onKeyPress={ (e) => { if(e.key === "Enter"){checkTry()} } }/>
        </BoxesDiv>   
    );
}
 

export default GameLine;
