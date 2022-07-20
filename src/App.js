import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
class App extends Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
