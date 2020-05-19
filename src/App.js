import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sigin-in-and-sign-up/sigin-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";
class App extends Component {
  state = {
    currentUser: null,
  };
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log("User signedin");
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
}
export default App;
