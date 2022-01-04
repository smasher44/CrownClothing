import React from 'react';
import './header.scss';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import spectre from '../../assets/spectre.png'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({currentUser, hidden}) => {
  return(
  <div className='header sticky'>
    <Link className='logo-container' to='/'>
      <img src={spectre} alt="spectre logo" height="60px"/> 
    </Link>
    <div className="search">
      <div className="inner-search">
        <input type="search" className='srch' placeholder='search'/>
      </div> 
    </div>
    <div className='options'>
      <Link className='option' to='/'>HOME</Link>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
        {   
          currentUser ? 
          <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
          :
          <Link className='option' to='/signin'>SIGN IN</Link>
        }
      <CartIcon/>
    </div>
    {
      hidden ? null : <CartDropdown/>
    }
  </div>
  )  
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser, 
  hidden:selectCartHidden
});


export default connect(mapStateToProps)(Header);