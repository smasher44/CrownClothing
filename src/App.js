import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.mainpage';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { Route, Routes } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from "firebase/firestore";

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentUser: null
      }  
    }
    
    unsubscribeFromAuth = null;
    //createUserProfileDocument(user);
    //this.setState({ currentUser: user});
    //console.log(user)

    componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          //console.log(userRef);
          //userRef.onSnapshot(snapShot => {
          //   console.log('snapShot 2',snapShot);
          //});
          onSnapshot(userRef, snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
          });
        } else {
          this.setState({currentUser: userAuth})
        }
      });
    }

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }
    
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/shop/hats' element={<HatsPage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/signin' element={<SignInAndSignUpPage/>}/>
        </Routes>
      </div> 
    )
  }
}

const HatsPage = () => (
  <div>
    <div>
      <h1>HATSPAGE</h1>
      <span>for testing</span>
    </div>
  </div>
)
  


export default App;
