import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop.mainpage';
import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';


const HatsPage = () => (
    <div>
      <h1>HATS PAGE</h1>
      <p>Testing page</p>
    </div>
)
   

//Route- Declares an element that should be rendered at a certain URL path

const App = () => (
    <div>
        <Header/>
        <Routes>
            <Route path="/" element={<HomePage/>}>
                <Route path="/" element={<HatsPage/>} />
            </Route>
            <Route path="/shop" element={<ShopPage/>}/>
        </Routes>
    </div>
)

export default App;
