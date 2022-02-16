import { useEffect, createRef, useState } from 'react';
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

    const lineIndex = props.index;
    
  
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

        setIsDisabled(true);

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

    const handleNextInput = (e) => {
        console.log("ID atual: " + e.target.id);
        const fieldName = parseInt(e.target.id.split('-')[1]);
        console.log(fieldName)
        if(fieldName === 1){
            setFirstLetter(e.target.value);
            console.log(fieldName)
        }
        else if(fieldName === 2){
            setSecondLetter(e.target.value);
        }
        else if(fieldName === 3){
            setThirdLetter(e.target.value);
        }
        else if(fieldName === 4){
            setFourthLetter(e.target.value);
        }
        else if(fieldName === 5){
            setFifthLetter(e.target.value);
        }

        // I promise that i tried switch case :c

        const nextSibiling = document.getElementById(`box${lineIndex}-${parseInt(fieldName) + 1}`);

        console.log(nextSibiling);
        nextSibiling.focus();
    }


    return ( 
        <BoxesDiv>
            <Box1 type="text" id={ `box${lineIndex}-1`} disabled={isDisabled} value={firstLetter} maxLength='1' onChange={(e) => setFirstLetter(e.target.value) } onKeyUp={(e) => handleNextInput(e)} /> 
            <Box2 type="text" id={ `box${lineIndex}-2`} disabled={isDisabled} onChange={(e) => setSecondLetter(e.target.value) } value={secondLetter}  maxLength='1' onKeyPress={(e) => handleNextInput(e)}/>
            <Box3 type="text" id={ `box${lineIndex}-3`} disabled={isDisabled} onChange={(e) => { handleNextInput(e); setThirdLetter(e.target.value)} } maxLength='1' value={thirdLetter} /> 
            <Box4 type="text" id={ `box${lineIndex}-4`} disabled={isDisabled} onChange={(e) => setFourthLetter(e.target.value) } maxLength='1' value={fourthLetter} />
            <Box5 type="text" id={ `box${lineIndex}-5`} disabled={isDisabled} onChange={(e) => setFifthLetter(e.target.value)} value={fifthLetter} maxLength='1' onKeyPress={ (e) => { if(e.key === "Enter"){checkTry()} } }/>
        </BoxesDiv>  
    );
}
 

export default GameLine;
