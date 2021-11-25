import React, {useContext} from 'react'
import useUser from '../../../hooks/useUser'
import ContextData from '../../../context/userDataContext';

// import validate from './validateInputs'


const UserData = ({ props }) => {
  const { logout } = useUser()
  const { userName } = useContext(ContextData);

  return (

    <div class="user_data" >
      <div class="avatar">
        <p>{userName.charAt(0).toUpperCase()}</p>
      </div>
      <div class="hi_username">
        <p class="hello">Hola,</p>
        <p class="username">{userName}</p>
        {console.log(userName)}
      </div>

      <button class="logout" onClick={logout}>X</button>
    </div>

  )
}

export default UserData