const pickAWord = () => {

    const jsonFile = require('./wordszzz.json');

    var wordsArray = [];

    for(let i = 0; i < jsonFile.length; i++){
        if(jsonFile[i].Freq > 20){
            wordsArray.push(jsonFile[i].Name);
        }
    }

    const TheWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];


    return TheWord;
}



export default pickAWord;