import React from 'react'


const UserData = ({ props }) => {
  return (

    <div class="user_data">

      <div class="avatar">
        <p>DT</p>
      </div>
      <div class="hi_username">
        <p class="hello">Hola,</p>
        <p class="username">Diego Testa</p>
      </div>

      <a class="logout" href="/">X</a>
    </div>

  )
}

export default UserData
