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

    const Button = styled.button`
        display: flex;
        border: 1px solid black;
        border-radius: 10px;
        margin: 5px;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        padding: 10px 20px;
        text-align: center;
        color: white;
        background-color: #2e2e2e;
        cursor: pointer;
        `



    return ( 
        <BoxesDiv>
            <Box1 type="text" disabled={isDisabled} onChange={(e) => setFirstLetter(e.target.value)} value={firstLetter} /> 
            <Box2 type="text" disabled={isDisabled} onChange={(e) => setSecondLetter(e.target.value) } value={secondLetter} />
            <Box3 type="text" disabled={isDisabled} onChange={(e) => setThirdLetter(e.target.value)} value={thirdLetter} /> 
            <Box4 type="text" disabled={isDisabled} onChange={(e) => setFourthLetter(e.target.value)} value={fourthLetter} />
            <Box5 type="text" disabled={isDisabled} onChange={(e) => setFifthLetter(e.target.value)} value={fifthLetter} />
            <Button disabled={isDisabled} onClick={ () => checkTry() }>Try</Button>
        </BoxesDiv>  
    );
}
 

export default GameLine;
