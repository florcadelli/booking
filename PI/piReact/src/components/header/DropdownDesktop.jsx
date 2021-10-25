import React from 'react'


const DropdownDesktop = ({props}) => {
return (
    
  <div class="dropdown_desktop">
  {/* <div class="close_menu"><i class="fa fa-times"></i></div>  */}
 <div class="close_menu" href="cierreSesion">X</div>
  {/* <h3>MENÚ</h3> */}

 <div class="dropdown_login">
   <div class="avatar">
     <p>BR</p>
   </div>
   <div class="hi_username">
     <p class="hello">Hola,</p>
     <p class="username">Bruno Rodríguez</p>
   </div>
    {/* <a class="logout" href="cierreSesion">X</a>  */}
 </div>
</div>
     
)
}

export default DropdownDesktop
