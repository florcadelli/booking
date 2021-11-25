import React from 'react'
import logo from '../../../assets/img/logo1.png';
// import {useHistory, useLocation, Link} from "react-router-dom";
import { useNavigate } from 'react-router';

const Company = ({ props }) => {
  
  // const location = useLocation();
  const navigate = useNavigate();

  return (

    <div class="company">
      {/* <a href={location.pathname === "/logedin" ? "" : "/home"}> */}
      <a onClick={()=> {navigate("/home")}}>
        <div class="logo">
          <img src={logo} alt="logotipo" />
        </div>
        <h4 class="slogan">Sentite como en tu hogar</h4>
      </a>
    </div>
  )
}

export default Company
