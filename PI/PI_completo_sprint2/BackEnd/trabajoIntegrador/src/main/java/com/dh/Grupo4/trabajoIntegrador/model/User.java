package com.dh.Grupo4.trabajoIntegrador.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
@Getter @Setter

public class User {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String last_name;
    private String mail;
    private String password;

}
