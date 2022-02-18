import styled from 'styled-components';

const Header = () => {

    const Header = styled.header`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 20px;
    `

    return ( 
        <Header>
            <a href="/" style = { { textDecoration: 'none' } }>
                <h1 style={ { fontSize: '2.5rem', fontWeight: '600', color: '#fff', textAlign: 'center', marginBottom: '1rem', margin: '2% 0% 3% 0%', letterSpacing: '-4px'} }>word.zzz</h1>  
            </a>
        </Header>
     );
}
 
export default Header;