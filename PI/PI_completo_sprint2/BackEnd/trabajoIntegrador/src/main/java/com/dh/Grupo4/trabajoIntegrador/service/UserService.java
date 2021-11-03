package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.User;
import com.dh.Grupo4.trabajoIntegrador.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class UserService implements IUserService{

    @Autowired
    IUserRepository userRepository;

    //mapper?

    public User createUser(User user){

        return userRepository.save(user);

    }

    public Optional<User> readUser (Long id){

        return userRepository.findById(id);

    }

    public User updateUser (User user){

        return userRepository.save(user);

    }

    public void deleteUser (Long id){

        userRepository.deleteById(id);

    }

    public Collection<User> readUsers (){

        return userRepository.findAll();

    }

}
