package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.User;

import java.util.Collection;
import java.util.Optional;

public interface IUserService {

    public User createUser(User user);

    public Optional<User> readUser (Long id);

    public User updateUser (User user);

    public void deleteUser (Long id);

    public Collection<User> readUsers ();

}
