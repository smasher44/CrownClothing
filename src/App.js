import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/shop.mainpage';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { Route, Routes } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentUser: null
      }  
    }
    
    unsubscribeFromAuth = null;

    componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        this.setState({ currentUser: user});
        console.log(user)
      })
    }

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }
    
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/signin' element={<SignInAndSignUpPage/>}/>
        </Routes>
      </div>
    )
  }
}
// const App = () => (
//     <div>
//         <Header/>
//         <Routes>
//             <Route path='/' element={<HomePage/>} />
//             <Route path='/shop' element={<ShopPage/>}/>
//             <Route path='/signin' element={<SignInAndSignUpPage/>}/>
//         </Routes>
//     </div>
// )

export default App;
