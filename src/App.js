import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Landing from './page/Landing.js';
import Exhibition from './page/Exhibition';

const App = () => (
  <div>
      <Router>
        <Routes>
            <Route exact path="/" element={<Landing/>} />
            <Route exact path="/test-mint" element={<Exhibition/>} />
        </Routes>    
      </Router>
  </div>
)

export default App
