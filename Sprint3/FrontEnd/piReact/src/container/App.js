import React, { useState } from "react";
import Main from "../components/home/main/Main";
import { BrowserRouter, Routes, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import FormCreateAccount from '../components/home/main/FormCreateAccount'
import Login from '../components/home/main/login'
import Header from "../components/home/header/Header";
import Footer from "../components/home/footer/Footer";
import Product from "../components/product_detail/product_detail";
import Reservation from "../components/reservation_detail/reservation_detail";
import { UserContextProvider } from "../context/userContext"
import {UserDataContextProvider} from "../context/userDataContext"

const App = () => {

  return (
    // <div className="App">
    <UserContextProvider>
      <UserDataContextProvider>
        <BrowserRouter>
          {/* <Redirect to='/home' /> */}

          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Main />} />
            <Route path="/createAccount" element={<><FormCreateAccount /><Main /> </>} />
            <Route path="/login" element={<><Login /><Main /> </>} />
            {/* <Route path='/logedin' element={<Main />} /> ya no es necesario con context */}
            {/* <Route path='/product_detail' element={<Product />} >
            <Route path=":productId" element={<Product />} />
          </Route> */}
            <Route path="product_detail/:productId" element={<Product />} />
            {/* Ingresar la ruta para la parte de reserva */}
            <Route path="product_detail/:productId/reservation" element={<Reservation />} />
          </Routes>
          {/* <Main /> */}
          <Footer />

        </BrowserRouter>
      </UserDataContextProvider>
    </UserContextProvider>
    //{/* </div> */}
  );
}


export default App;
