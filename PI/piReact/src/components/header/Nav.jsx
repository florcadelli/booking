import React from 'react'


import UserEntry from "./UserEntry";
import UserData from "./UserData";
import HamburguerMenu from "./HamburguerMenu";

const Nav = ({props}) => {
return (
    
      <nav>
      <div class="menu"><i class="fas fa-bars kangrebur"></i></div>
      {/* <UserEntry/> */}
      <UserData/>
      <HamburguerMenu/> 
    </nav>

)
}

export default Nav
