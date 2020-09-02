import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'

import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector'


import './App.css';


const App = ({ setCurrentUser, currentUser }) => {

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth)

          ; (await userRef).onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
          })
      } else {
        setCurrentUser(userAuth)
      }
    })
    return () => {
      unsubscribe()
    }
  }, [setCurrentUser])

  return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin'
          render={
            () => currentUser
              ?
              (<Redirect to='/' />)
              :
              (<SignInAndSignUpPage />)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,

})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
