import { useState } from 'react';

const UX = (props) => {

    const word = props.word;

    var wordArray = []

    if(word !== null){
        wordArray = word.split('');
    }
    
  
    const checkTry = () => {
        const userGuess = firstLetter + ' ' + secondLetter + ' ' + thirdLetter + ' ' + fourthLetter + ' ' + fifthLetter;
        const splitTry = userGuess.toUpperCase().split(' ');
        var stringToCompare = '';
        for(let i = 0; i < wordArray.length; i++){
            if(splitTry[i] === wordArray[i]){
                stringToCompare += 'green ';
            }
            else if(wordArray.indexOf(splitTry[i]) !== -1){
                stringToCompare += 'yellow ';
            }
            else{
                stringToCompare += 'red ';
            }
        }
        console.log(stringToCompare)
    }

    const [firstLetter, setFirstLetter] = useState(null);
    const [secondLetter, setSecondLetter] = useState(null);
    const [thirdLetter, setThirdLetter] = useState(null);
    const [fourthLetter, setFourthLetter] = useState(null);
    const [fifthLetter, setFifthLetter] = useState(null);

    return ( 
        <div>
            <input type="text" onChange={(e) => setFirstLetter(e.target.value)} maxLength='1'/> 
            <input type="text" onChange={(e) => setSecondLetter(e.target.value)} maxLength='1'/>
            <input type="text" onChange={(e) => setThirdLetter(e.target.value)} maxLength='1'/> 
            <input type="text" onChange={(e) => setFourthLetter(e.target.value)} maxLength='1'/>
            <input type="text" onChange={(e) => setFifthLetter(e.target.value)} maxLength='1'/>
            <button onClick={ () => checkTry() }>Try</button>
        </div>  
    );
}
 

export default UX;
