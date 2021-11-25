package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.CategoryDTO;
import com.dh.Grupo4.trabajoIntegrador.model.DTO.UserDTO;
import com.dh.Grupo4.trabajoIntegrador.model.User;

import java.util.Collection;
import java.util.Optional;

public interface IUserService {

     void createUser(UserDTO userDTO);

     UserDTO readUser (Long id);

      void updateUser (UserDTO userDTO);

     void deleteUser (Long id);

     Collection<UserDTO> readUsers ();

}




