import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const SevenGameLine = (props) => {

    const everyWordArray = props.everyWordArray;

    const [endMessage, setEndMessage] = useState(null);

    const [showMessage, setShowMessage] = useState(false);

    const [numberOfGames7, setNumberOfGames7] = useState(0);
    const [numberOfWins7, setNumberOfWins7] = useState(0);
    
    const [wordArray, setWordArray] = useState([]);
    useEffect(() => {
        const word = props.word;
        if(word !== null){
            setWordArray(word.split(''));
        }

    }, [props.word]);

    const lineIndex = props.index;
  
    const checkTry = () => {
        var colors = ["", "", "", "", "", "", ""];
        const splitTry = tryArray;
        const userGuess = splitTry;

        const stringTry = tryArray.join('');

        var wordExists = false;

        if(everyWordArray.includes(stringTry)) wordExists = true;

        if(wordExists === false){
            setBoxBorder('4px solid #7a0606');
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
            setSixthLetter(userGuess[5]);
            setSeventhLetter(userGuess[6]);
            
            for(let i = 0; i < wordArray.length; i++){
                if(splitTry[i] === wordArray[i]){
                    colors[i] = '#148f0b';
                }
                else if(wordArray.indexOf(splitTry[i]) !== -1){
                    colors[i] = '#ab9807';
                }
                else{
                    colors[i] = '#7a0606';
                }
            }

            // This is to fix the duplicate letters bug
            for(let i = 0; i < colors.length; i++){
                if(colors[i] === '#ab9807'){
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
                            colors[arrayToChange[i]] = '#7a0606';
                        }
                    }
                }
            }

            const user7Games = JSON.parse(localStorage.getItem("user7Games"));

            if(colors.indexOf("#7a0606") === -1 && colors.indexOf("#ab9807") === -1){
                user7Games[lineIndex] = "v";
                const oldGames7 = localStorage.getItem('games7');
                const oldWins7 = localStorage.getItem('wins7');
                const nGames7 = parseInt(oldGames7) + 1;
                const nWins7 = parseInt(oldWins7) + 1;
                localStorage.setItem('games7', nGames7);
                localStorage.setItem('wins7', nWins7);
                setNumberOfGames7(nGames7);
                setNumberOfWins7(nWins7);
                setTimeout(() => {
                    setEndMessage("Você venceu!");
                    setShowMessage(true);
                }, 1000);
            }
            else{
                user7Games[lineIndex] = "f";
                if(user7Games[lineIndex] !== 5){
                    user7Games[lineIndex + 1] = "t";
                    const nextFocus = document.getElementById(`box${lineIndex + 1}-1`);
                    if(nextFocus !== null){
                        nextFocus.focus();
                    }
                }
            }

            if(user7Games[7] === "f"){
                const oldGames7 = localStorage.getItem('games7');
                const oldWins7 = localStorage.getItem('wins7');
                const nGames7 = parseInt(oldGames7) + 1;
                const nWins7 = parseInt(oldWins7);
                localStorage.setItem('games7', nGames7);
                localStorage.setItem('wins7', nWins7);
                setNumberOfGames7(nGames7);
                setNumberOfWins7(nWins7);
                setTimeout(() => {
                    setEndMessage("Você perdeu!");
                    setShowMessage(true);
                }, 1000);
            }

            localStorage.setItem("user7Games", JSON.stringify(user7Games));

            setColorsArray(colors);
           
            setIsDisabled('none');

        }
    }


    const [firstLetter, setFirstLetter] = useState(null);
    const [secondLetter, setSecondLetter] = useState(null);
    const [thirdLetter, setThirdLetter] = useState(null);
    const [fourthLetter, setFourthLetter] = useState(null);
    const [fifthLetter, setFifthLetter] = useState(null);
    const [sixthLetter, setSixthLetter] = useState(null);
    const [seventhLetter, setSeventhLetter] = useState(null);

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
        pointer-events: ${isDisabled};
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

    const Box6 = styled(Box)`
        background-color: ${colorsArray[5]};
    `

    const Box7 = styled(Box)`
        background-color: ${colorsArray[6]};
    `

    const Message = styled.div`
        display: flex;
        position: absolute;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 400px;
        padding: 30px;
        top: 30%;
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        background-color: white;
        color: black;
        border-radius: 10px;
        @media (max-width: 800px) {
            width: 60vw;
            top: 40%;
        }
        z-index: 0;

    `

    const Button = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #1c1c1c;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px;
        width: 200px;
        margin: 10px;
        font-size: 15px;
        cursor: pointer;
        outline: none;
        transition: 0.3s ease all;
        &:hover {
            background-color: #3f3f3f;
            font-weight: bold;
            letter-spacing: 1px;
        }

        @media (max-width: 800px) {
            width: 110px;
            height: 50px;
            font-size: 14px;
        }
    `

    const tryArray = [" ", " ", " ", " ", " ", " ", " "];

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
    
    const handleDisabling = (target) => {
        const userGames = JSON.parse(localStorage.getItem("userGames"))

        if(userGames[lineIndex] !== "t") {
            setIsDisabled('none');
        }
        else{
            setIsDisabled('all');
            const setFocus = document.getElementById(target);
            setFocus.focus();
        }
    }

    const handleChangeVisibility = () => {
        setShowMessage(false);
    }

    const [miniButtonColor, setMiniButtonColor] = useState('#1c1c1c');
    const [miniButtonHoverSpacing, setMiniButtonHoverSpacing] = useState('0.5px');
    const [miniButtonWeight, setMiniButtonWeight] = useState('bold');
    const [miniButtonCursor, setMiniButtonCursor] = useState('pointer');

    const MiniButton = styled(Button)`
        background-color: ${miniButtonColor};
        width: 80px;
        font-size: 10px;
        cursor: ${miniButtonCursor};
        &:hover {
            letter-spacing: ${miniButtonHoverSpacing};
            font-weight: ${miniButtonWeight};
        }
        @media (max-width: 800px) {
            width: 70px;
            height: 30px;
            font-size: 10px;
        }
    `

    const [miniButtonState, setMiniButtonState] = useState(false);

    const resetScore = () => {
        localStorage.setItem('Games7', 0);
        localStorage.setItem('Wins7', 0);
        setNumberOfGames7(0);
        setNumberOfWins7(0);
        setMiniButtonState(true);
        setMiniButtonColor('#3f3f3f');
        setMiniButtonHoverSpacing('normal');
        setMiniButtonWeight('normal');
        setMiniButtonCursor('default');
    }

    return ( 
        <BoxesDiv>
            <Box1 type="text" id={ `box${lineIndex}-1`} tabIndex="-1" onClick={ (e) => handleDisabling(e.target.id) } value={firstLetter} onChange={(e) => handleNextInput(e) } maxLength='1' autoComplete="off"  onKeyDown={(e) => handleDelete(e)}/> 
            <Box2 type="text" id={ `box${lineIndex}-2`} tabIndex="-1" onClick={ (e) => handleDisabling(e.target.id) } value={secondLetter} onChange={(e) => handleNextInput(e) } maxLength='1' autoComplete="off" onKeyDown={(e) => handleDelete(e)}/>
            <Box3 type="text" id={ `box${lineIndex}-3`} tabIndex="-1" onClick={ (e) => handleDisabling(e.target.id) } value={thirdLetter} onChange={(e) => handleNextInput(e) } maxLength='1' autoComplete="off" onKeyDown={(e) => handleDelete(e)}/> 
            <Box4 type="text" id={ `box${lineIndex}-4`} tabIndex="-1" onClick={ (e) => handleDisabling(e.target.id) } value={fourthLetter} onChange={(e) => handleNextInput(e) } maxLength='1'  autoComplete="off" onKeyDown={(e) => handleDelete(e)}/>
            <Box5 type="text" id={ `box${lineIndex}-5`} tabIndex="-1" onClick={ (e) => handleDisabling(e.target.id) } value={fifthLetter} onChange={(e) => handleNextInput(e) } maxLength='1'  autoComplete="off" onKeyDown={(e) => handleDelete(e)}/>
            <Box6 type="text" id={ `box${lineIndex}-6`} tabIndex="-1" onClick={ (e) => handleDisabling(e.target.id) } value={sixthLetter} onChange={(e) => handleNextInput(e) } maxLength='1'  autoComplete="off" onKeyDown={(e) => handleDelete(e)}/>
            <Box7 type="text" id={ `box${lineIndex}-7`} tabIndex="-1" onClick={ (e) => handleDisabling(e.target.id) } value={seventhLetter} onChange={(e) => handleNextInput(e) } maxLength='1' autoComplete="off" onKeyDown={(e) => handleDelete(e)} onKeyPress={ (e) => { if(e.key === "Enter"){checkTry()} } } enterKeyHint="done" />
            
            {showMessage && <Message>
                <FontAwesomeIcon icon={ faEyeSlash } style={ { fontSize: '21px', fontWeight: '500', display: 'flex', width: '100%', justifyContent: 'flex-end', marginLeft: '90%', cursor: 'pointer' } }  onClick={ handleChangeVisibility }/>
                <h2 style={ { fontSize: '28px', fontWeight: '600', display: 'flex', width: '100%', justifyContent: 'flex-start' } }>{ endMessage }</h2>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-around'}}>
                    <p style={ { fontSize: '15px' } }>A palavra era: <strong>{props.utf8Word}</strong></p>
                    <Button onClick={ () => window.location.reload() }>Jogar novamente</Button>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px', alignItems:'center', justifyContent:'space-around', width:'75%', marginLeft:'-30%'}}>
                    <p style= {{ fontSize: '15px' }}>Jogos: { numberOfWins7 }/{ numberOfGames7 }</p>
                    <MiniButton disabled={ miniButtonState } onClick={ resetScore }>Zerar</MiniButton>
                </div>
            </Message>}
        </BoxesDiv>   
    );
}
 

export default SevenGameLine;
