import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import SignInUpPage from "./pages/sign-in-up/sign-in-up.component";

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/signin" component={SignInUpPage}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
