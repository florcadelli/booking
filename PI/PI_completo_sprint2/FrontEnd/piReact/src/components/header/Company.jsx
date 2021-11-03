import React from 'react'
import logo from '../../assets/img/logo1.png';
import {useHistory, useLocation, Link} from "react-router-dom";

const Company = ({ props }) => {
  
  const location = useLocation();

  return (

    <div class="company">
      <a href={location.pathname === "/logedin" ? "" : "/"}>
        <div class="logo">
          <img src={logo} alt="logotipo" />
        </div>
        <h4 class="slogan">Sentite como en tu hogar</h4>
      </a>
    </div>
  )
}

export default Company
