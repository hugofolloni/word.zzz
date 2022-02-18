import Game from './Game.js';
import Header from './Header.js';
import Homepage from './Homepage.js';
import Daily from './Daily.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App" style={ {display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '100vw', maxHeight: '100vh'} }>
        <Header />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/puzzles' element={<Game />} />
          <Route exact path='/daily' element={<Daily />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
