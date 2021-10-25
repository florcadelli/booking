import React from 'react'
import logo from '../../assets/img/logo1.png';

const Company = ({props}) => {
return (
    
      <div class="company">
        <a href="/">
          <div class="logo">
            <img src={logo} alt="logotipo" />
          </div>
          <h4 class="slogan">Sentite como en tu hogar</h4>
        </a>
      </div>

     
)
}

export default Company
