import React from 'react';
import './header.styles.scss';

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../CartIcon/carticon.component';
import CartDropdown from '../CartDropdown/cartdropdown.component';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/contact' className='option'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to='/signin' className='option'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

Header.propTypes = {
  currentUser: PropTypes.object,
  hidden: PropTypes.bool,
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
