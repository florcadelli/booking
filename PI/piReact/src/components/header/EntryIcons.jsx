import React from 'react'


const EntryIcons = ({props}) => {
return (
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
 
     
)
}

export default EntryIcons
