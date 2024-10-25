import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './PageComponents/Home';
import About from './PageComponents/About';


function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
