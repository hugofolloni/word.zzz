import styled from 'styled-components';

const Daily = () => {

    const DailyDiv = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 40vw;
        height: 25%;
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
            background-color: black;
            font-weight: bold;
            letter-spacing: 1px;
        }

        @media (max-width: 800px) {
            width: 90px;
            height: 50px;
            font-size: 14px;
        }
    `

    return ( 
        <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'center', height: '80vh', justifyContent: 'space-around'} }>
            <DailyDiv>
                <h1>Daily</h1>
                <p>Desculpe pelo transtorno. Esta versão ainda está sendo produzida. Volte em breve! Te esperamos por aqui! c:</p>
                <Button onClick={() => window.location.href = '/'}>Voltar</Button>
            </DailyDiv>
        </div>
     );
}
 
export default Daily;