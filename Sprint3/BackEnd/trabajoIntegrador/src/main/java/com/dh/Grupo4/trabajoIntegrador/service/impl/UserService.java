package com.dh.Grupo4.trabajoIntegrador.service.impl;

import com.dh.Grupo4.trabajoIntegrador.model.DTO.UserDTO;
import com.dh.Grupo4.trabajoIntegrador.model.User;
import com.dh.Grupo4.trabajoIntegrador.repository.IUserRepository;
import com.dh.Grupo4.trabajoIntegrador.service.IUserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService implements IUserService {

    @Autowired
    IUserRepository userRepository;

    @Autowired
    ObjectMapper mapper;

    //Viene con Spring security, variable encriptadora de password
    /*PasswordEncoder passwordEncoder;

    public UserService(IUserRepository userRepository, ObjectMapper mapper) {
        this.userRepository = userRepository;
        this.mapper = mapper;
        this.passwordEncoder = new BCryptPasswordEncoder(12);//strength valor entre 4 y 31, mas grande mas trabajo calcular el hash/encriptado
    }

    public void createUser(UserDTO userDTO){
        User user = mapper.convertValue(userDTO,User.class);
        //Encriptamos password
        String encodedPassword =this.passwordEncoder.encode(user.getPassword());
        //Que se establezca password encriptada
        user.setPassword(encodedPassword);
        userRepository.save(user);
    }
*/
    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;
    //Viene con Spring security, variable encriptadora de password
    //PasswordEncoder passwordEncoder;


    public UserService(IUserRepository userRepository, ObjectMapper mapper) {
        this.userRepository = userRepository;
        this.mapper = mapper;
        //this.passwordEncoder = new BCryptPasswordEncoder(12);//strength valor entre 4 y 31, mas grande mas trabajo calcular el hash/encriptado
    }


    /*public void createUser(UserDTO userDTO){
        User user = mapper.convertValue(userDTO,User.class);
        String salt = BCrypt.gensalt();
        //Encriptamos password
        String encodedPassword = BCrypt.hashpw(user.getPassword(), salt);
        //Que se establezca password encriptada
        user.setPassword(encodedPassword);
        userRepository.save(user);
    }*/

    public void createUser(UserDTO userDTO){
        User user = mapper.convertValue(userDTO,User.class);
        //Encriptamos password
        String encodedPassword =this.bCryptPasswordEncoder.encode(user.getPassword());
        //Que se establezca password encriptada
        user.setPassword(encodedPassword);
        userRepository.save(user);
    }



    public UserDTO readUser (Long id){
        UserDTO userDTO =null;
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()){
            userDTO = mapper.convertValue(user, UserDTO.class);
        }
        return userDTO;
    }

    public void updateUser (UserDTO userDTO){
        User user = mapper.convertValue(userDTO,User.class);
        userRepository.save(user);
    }

    public void deleteUser (Long id){

        userRepository.deleteById(id);

    }

    public Collection<UserDTO> readUsers (){

        List<User> users = userRepository.findAll();
        Set<UserDTO> userDTOS = new HashSet<>();
        for (User user: users) {
            userDTOS.add(mapper.convertValue(user, UserDTO.class));
        }
        return userDTOS;
    }

}
