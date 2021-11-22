import React from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop.mainpage';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { Route, Routes } from 'react-router-dom';



//Route- Declares an element that should be rendered at a certain URL path

const App = () => (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/shop' element={<ShopPage/>}/>
            <Route path='/signin' element={<SignInAndSignUpPage/>}/>
        </Routes>
    </div>
)

export default App;
