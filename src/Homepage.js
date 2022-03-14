import styled from 'styled-components';

const Homepage = () => {

    const Button = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        color: #1c1c1c;
        border: none;
        border-radius: 5px;
        padding: 10px;
        width: 100px;
        margin: 10px;
        font-size: 18px;
        cursor: pointer;
        outline: none;
        transition: 0.3s ease all;
        &:hover {
            background-color: #eaeaea;
            font-weight: bold;
            letter-spacing: 1px;
        }

        @media (max-width: 800px) {
            width: 80px;
            height: 30px;
            font-size: 14px;
        }
    `

    const Tutorial = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 40vw;
        height: 60%;
        background-color: #3e3e3e;
        box-shadow: 10px 5px 5px #1e1e1e;
        font-size: 15px;
        color: white;
        padding: 40px;
        margin-bottom: 20px;
        border-radius: 10px;

        @media (max-width: 800px) {
            width: 80vw;
            font-size: 10px;
            margin-bottom: 10px;
            padding: 15px;
        }

    `

    const TutorialExample = styled.div`
        display: flex;  
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        border-radius: 6px;
        margin: 0px 15px;
    `

    const SingleExemplo = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 10px;
    `

    const handlePuzzles = () => {
        window.location.href = '/puzzles';
    }

    const handleSix = () => {
        window.location.href = '/6';
    }

    const handleSeven = () => {
        window.location.href = '/7';
    }

    return ( 
        <div className="homepage-div" style={ { display: 'flex', flexDirection: 'column', alignItems: 'center', height: '80vh', justifyContent: 'space-around'} }>
            <Tutorial>
                <p>Este é um jogo no qual você tentará descobrir a palavra de 5 letras.</p>
                <p>Conforme você tenta acertar, nós daremos algumas informações para lhe mostrar o quão perto está da resposta certa.</p>
                <div className="exemplos" style={ { display: 'flex', flexDirection: 'column', marginTop: '10px'}}>
                    <SingleExemplo>
                        <TutorialExample style={ { backgroundColor: '#148f0b'}}>T</TutorialExample>
                        <p>Letra correta na posição correta.</p>
                    </SingleExemplo>
                    <SingleExemplo>
                        <TutorialExample style={ { backgroundColor: '#ab9807'}}>R</TutorialExample>
                        <p>Letra correta na posição errada.</p>
                    </SingleExemplo>
                    <SingleExemplo>
                        <TutorialExample style={ { backgroundColor: '#7a0606'}}>O</TutorialExample>
                        <p>Letra incorreta.</p>
                    </SingleExemplo>
                </div>
                <p>As palavras não possuem acentos ou cedilha. Elas podem possuir letras repetidas.</p>
                <p>Possuímos três modos de jogo: o mais comum, Puzzles, com 5 letras, mas também temos o modo para 6 ou 7 letras.</p>
                <p>Este jogo foi criado por <a href='https://github.com/hugofolloni' style= {{ textDecoration: 'none', fontWeight: '600', color: 'white'}}>Hugo Folloni</a>.</p>
                <p>Divirta-se!</p>
            </Tutorial>
            <div className="game-choose" style={ { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' } }>
                <Button onClick={ handlePuzzles }>Puzzles</Button>
                <Button onClick={ handleSix }>Sexteto</Button>
                <Button onClick={ handleSeven }>Septeto</Button>
            </div>
        </div>
     );
}
 
export default Homepage;