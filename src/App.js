import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.mainpage';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout/checkout';
import { Route, Routes } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from "firebase/firestore";
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect'; 
import { selectCurrentUser } from './redux/user/user.selectors'

class App extends Component {
    unsubscribeFromAuth = null;
    
    componentDidMount() {
      const { setCurrentUser } = this.props;
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          onSnapshot(userRef, snapShot => {
            setCurrentUser({
                id: snapShot.id,
                ...snapShot.data() /* data here is in reference to all 
                parameters we set in the firestore database (displayName,
                email,createdAt,...etc) */
            });
          });
        } else {
          setCurrentUser(userAuth);
        }
      });
    }

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }
    
  render() {
    return (
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/shop/hats' element={<HatsPage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/signin' element={<SignInAndSignUpPage/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
        </Routes>
      </div> 
    )
  }
}

// this code is for testing
const HatsPage = () => (
  <div>
    <div>
      <h1>HATSPAGE</h1>
      <span>for testing</span>
    </div>
  </div>
)
  
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
