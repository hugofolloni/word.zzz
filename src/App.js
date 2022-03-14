import Game from './Game.js';
import Header from './Header.js';
import Homepage from './Homepage.js';
import Six from './versions/Six.js'
import Seven from './versions/Seven.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App" style={ {display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '100vw', maxHeight: '100vh'} }>
        <Header />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/puzzles' element={<Game />} />
          <Route exact path='/6' element={<Six/>} />
          <Route exact path='/7' element={<Seven/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
