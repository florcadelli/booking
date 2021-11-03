import React from 'react'
import {useHistory, useLocation, Link} from "react-router-dom";

const HamburguerMenu = ({ fn }) => {

  const location = useLocation();
  
  return (
    <div class="hamburguer_menu hamburguer_menu_visible">
      <div class="dropdown_desktop">
        <div class="close_menu" href="cierreSesion" onClick={fn}>
          X
        </div>

        {/*Muestro y oculto según si el usuario está logueado o no*/}
        {location.pathname === "/logedin" ? ( 
        <div class="dropdown_login">
          <div class="avatar">
            <p>DT</p>
          </div>
          <div class="hi_username">
            <p class="hello">Hola,</p>
            <p class="username">Diego Testa</p>
          </div>
        </div>) : <h3>MENÚ</h3>}

        {/* <h3>MENÚ</h3> */}

        {/* esto va cuando el usuario esta logueado */}
        {/* <div class="dropdown_login">
          <div class="avatar">
            <p>DT</p>
          </div>
          <div class="hi_username">
            <p class="hello">Hola,</p>
            <p class="username">Diego Testa</p>
          </div>
        </div> */}


      </div>

      <div class="entry_icons">

        {/*Muestro y oculto según si el usuario está logueado o no*/}

        {location.pathname === "/logedin" ? (
          <div class="nav_login"> 
          <div class="space"></div>
          <div class="nav_footer">
            <h5 class="close_option">
              ¿Deseas <Link to="/"><span>cerrar sesión</span></Link>?
            </h5>
            <div class="line2"></div> {/* agregarle LINK para cerrar sesion */}
            </div>
          </div>
        ) : (
          <div class="entry">
            <Link to={"/createAccount"} onClick={fn}>Crear cuenta</Link> 
            <div class="line"></div>
            <Link to={"/login"} onClick={fn}>Iniciar sesión</Link>
          </div>
        ) }

        {/* <div class="entry">
        <Link to={"/createAccount"}>Crear cuenta</Link> 
        <div class="line"></div>
        <Link to={"/login"}>Iniciar sesión</Link>
        </div> */}

        {/* esto va cuando el usuario esta logueado */}
        {/* <div class="nav_login"> 
          <div class="space"></div>

          <div class="nav_footer">
            <h5 class="close_option">
              ¿Deseas <span>cerrar sesión</span>?
            </h5>
            <div class="line2"></div> // agregarle LINK para cerrar sesion
          </div>
        </div> */}

        <span class="nav_social_networks">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
        </span>
      </div>
    </div>
  );
};

export default HamburguerMenu;
