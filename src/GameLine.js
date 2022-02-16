import { useEffect, useState } from 'react';
import styled from 'styled-components';

const GameLine = (props) => {

    const everyWordArray = props.everyWordArray;

    const [wordArray, setWordArray] = useState([]);
    useEffect(() => {
        const word = props.word;
        if(word !== null){
            setWordArray(word.split(''));
        }
    }, [props.word]);

    const lineIndex = props.index;
  
    const checkTry = () => {
        var colors = ["", "", "", "", ""];
        const splitTry = tryArray;
        const userGuess = splitTry;

        const stringTry = tryArray.join('');

        var wordExists = false;

        for(let i = 0; i < everyWordArray.length; i++){
            if(everyWordArray[i] === stringTry){
                wordExists = true;
            }
        }

        if(wordExists === false){
            setBoxBorder('4px solid red');
            setTimeout(() => {
                setBoxBorder('none');
                const resetFocus = document.getElementById(`box${lineIndex}-1`);
                resetFocus.focus();
            }, 1000);
        }
        else{
            
            setFirstLetter(userGuess[0]);
            setSecondLetter(userGuess[1]);
            setThirdLetter(userGuess[2]);
            setFourthLetter(userGuess[3]);
            setFifthLetter(userGuess[4]);
            
            for(let i = 0; i < wordArray.length; i++){
                if(splitTry[i] === wordArray[i]){
                    colors[i] = 'green';
                }
                else if(wordArray.indexOf(splitTry[i]) !== -1){
                    colors[i] = 'yellow';
                }
                else{
                    colors[i] = 'red';
                }
            }

            // This is to fix the duplicate letters bug
            for(let i = 0; i < colors.length; i++){
                if(colors[i] === 'yellow'){
                    const indexOnWord = [];
                    var idxW = wordArray.indexOf(splitTry[i]);
                    while (idxW !== -1) {
                        indexOnWord.push(idxW);
                        idxW = wordArray.indexOf(splitTry[i], idxW + 1);
                    }
                    const indexOnTry = [];
                    var idxT = splitTry.indexOf(splitTry[i]);
                    while (idxT !== -1) {
                        indexOnTry.push(idxT);
                        idxT = splitTry.indexOf(splitTry[i], idxT + 1);
                    }
                    if(indexOnTry.length > indexOnWord.length){
                        const arrayToChange = [...indexOnTry];
                        for(let i = 0; i < indexOnWord.length; i++){
                            const toExtract = indexOnWord[i]
                            arrayToChange.splice(arrayToChange.indexOf(toExtract), 1);
                        }   
                        for(let i = 0; i < arrayToChange.length; i++){
                            colors[arrayToChange[i]] = 'red';
                        }
                    }
                }
            }

            setColorsArray(colors);
            setColorsArray(colors);
            setIsDisabled(true);

        }
    }


    const [firstLetter, setFirstLetter] = useState(null);
    const [secondLetter, setSecondLetter] = useState(null);
    const [thirdLetter, setThirdLetter] = useState(null);
    const [fourthLetter, setFourthLetter] = useState(null);
    const [fifthLetter, setFifthLetter] = useState(null);


    const [colorsArray, setColorsArray] = useState([]); 

    const [isDisabled, setIsDisabled] = useState(false);
    
    const [boxBorder, setBoxBorder] = useState('none');

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
        cursor: pointer;
        outline: none;
        border: ${boxBorder};
        &:focus {
            border-style: inset;
            border-color: white;
            border-width: 1px 1px 5px 1px;
        }
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

    const tryArray = [" ", " ", " ", " ", " "];

    const handleNextInput = (e) => {
        if(e.target.value.length === 1){
            const fieldName = parseInt(e.target.id.split('-')[1]);
            tryArray[fieldName - 1] = e.target.value.toLowerCase();
            const nextSibiling = document.getElementById(`box${lineIndex}-${parseInt(fieldName) + 1}`);
            if(nextSibiling !== null){
                nextSibiling.focus();
            }
        }
    }

    const handleDelete = (e) => {
        if(e.target.value.length === 0 && e.key === "Backspace"){
            const fieldName = parseInt(e.target.id.split('-')[1]);
            tryArray[fieldName - 1] = e.target.value.toLowerCase();
            const nextSibiling = document.getElementById(`box${lineIndex}-${parseInt(fieldName) - 1}`);
            if(nextSibiling !== null){
                nextSibiling.focus();
            }
        }
    }


    return ( 
        <BoxesDiv>
            <Box1 type="text" id={ `box${lineIndex}-1`} disabled={isDisabled} value={firstLetter} onChange={(e) => handleNextInput(e) } maxLength='1' autoComplete="off"  onKeyDown={(e) => handleDelete(e)}/> 
            <Box2 type="text" id={ `box${lineIndex}-2`} disabled={isDisabled} value={secondLetter} onChange={(e) => handleNextInput(e) } maxLength='1' autoComplete="off" onKeyDown={(e) => handleDelete(e)}/>
            <Box3 type="text" id={ `box${lineIndex}-3`} disabled={isDisabled} value={thirdLetter} onChange={(e) => handleNextInput(e) } maxLength='1' autoComplete="off" onKeyDown={(e) => handleDelete(e)}/> 
            <Box4 type="text" id={ `box${lineIndex}-4`} disabled={isDisabled} value={fourthLetter} onChange={(e) => handleNextInput(e) } maxLength='1'  autoComplete="off" onKeyDown={(e) => handleDelete(e)}/>
            <Box5 type="text" id={ `box${lineIndex}-5`} disabled={isDisabled} value={fifthLetter} onChange={(e) => handleNextInput(e) } maxLength='1' autoComplete="off" onKeyDown={(e) => handleDelete(e)} onKeyPress={ (e) => { if(e.key === "Enter"){checkTry()} } }/>
        </BoxesDiv>   
    );
}
 

export default GameLine;
