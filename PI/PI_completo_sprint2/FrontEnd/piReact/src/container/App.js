import React from "react";
import Main from "../components/main/Main";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FormCreateAccount from '../components/main/FormCreateAccount'
import Login from '../components/main/login'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


const App = ({ props }) => {
  return (
    // <div className="App">
    <BrowserRouter>
      <Header/>

      <Switch> {/* Ver si se lo cambia por un onClick para que no cambie la URL */}
        <Route exact path='/'></Route>
        <Route exact path='/logedin'></Route>
        <Route path="/createAccount"><FormCreateAccount/></Route>
        <Route path="/login"><Login/></Route>

      </Switch>
      <Main/>
      <Footer/>
    </BrowserRouter>
    //{/* </div> */}
  );
};

export default App;
