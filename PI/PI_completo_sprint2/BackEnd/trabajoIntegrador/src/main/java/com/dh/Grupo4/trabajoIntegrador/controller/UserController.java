package com.dh.Grupo4.trabajoIntegrador.controller;

import com.dh.Grupo4.trabajoIntegrador.model.User;
import com.dh.Grupo4.trabajoIntegrador.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private IUserService userService;

    @PostMapping()
    public ResponseEntity<User> addUser (@RequestBody User user){

        return ResponseEntity.ok(userService.createUser(user));

    }

    @GetMapping("/{id}")
    public Optional<User> readUser(@PathVariable Long id){

        return userService.readUser(id);

    }

    @PutMapping
    public ResponseEntity<User> updateUser(@RequestBody User user){

        ResponseEntity<User> response = null;

        if (user.getId() != null && userService.readUser(user.getId()).isPresent())
            response = ResponseEntity.ok(userService.updateUser(user));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id){

        userService.deleteUser(id);
        return ResponseEntity.status(HttpStatus.OK).body("deleted.");

    }

    @GetMapping("/list")
    public Collection<User> readUsers (){

        return userService.readUsers();

    }

}
