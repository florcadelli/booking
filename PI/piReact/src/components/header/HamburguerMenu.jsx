import React from "react";

const HamburguerMenu = ({ fn }) => {
  
  return (
    <div class="hamburguer_menu hamburguer_menu_visible">
      <div class="dropdown_desktop">
        <div class="close_menu" href="cierreSesion" onClick={fn}>
          X
        </div>

        {/* <h3>MENÚ</h3> */}

        <div class="dropdown_login">
          <div class="avatar">
            <p>DT</p>
          </div>
          <div class="hi_username">
            <p class="hello">Hola,</p>
            <p class="username">Diego Testa</p>
          </div>
        </div>
        
      </div>
      <div class="entry_icons">
        {/* <div class="entry">
<a href="#">Crear cuenta</a> 
<div class="line"></div>
<a href="#">Iniciar sesión</a>
</div>  */}

        <div class="nav_login">
          <div class="space"></div>

          <div class="nav_footer">
            <h5 class="close_option">
              ¿Deseas <span>cerrar sesión</span>?
            </h5>
            <div class="line2"></div>
          </div>
        </div>

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
