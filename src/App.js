import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Landing from './page/Landing.js';


const App = () => (
  <div>
      <Router>
        <Routes>
            <Route exact path="/" element={<Landing/>} />
        </Routes>    
      </Router>
  </div>
)

export default App
