import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import { Route, Routes } from 'react-router-dom';


const HatsPage = () => {
  <div>
    <h1>HATS PAGE</h1>
  </div>
}

//Route- Declares an element that should be rendered at a certain URL path

const App = () => (
  <div>
    <Routes>
      <Route path='/' component={HomePage} />
      {/* <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HatsPage} /> */}
      {/* <HomePage/> */}
    </Routes>
  </div>
)

export default App;
