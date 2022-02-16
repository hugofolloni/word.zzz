import Game from './Game.js';

function App() {
  return (
    <div className="App" style={ {display: 'flex', justifyContent: 'center', width: '100vw', height: '100vh'} }>
      <header className="App-header">
       <h1>Word.zzz</h1>
      </header>
      <Game />
    </div>
  );
}

export default App;
