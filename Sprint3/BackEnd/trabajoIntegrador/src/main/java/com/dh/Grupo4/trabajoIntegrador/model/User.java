package com.dh.Grupo4.trabajoIntegrador.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

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

    @ManyToOne
    @JoinColumn(name="rol_id", nullable = false)
    private Role role;

    public User() {
    }

    public User(String name, String last_name, String mail, String password, Role role) {
        this.name = name;
        this.last_name = last_name;
        this.mail = mail;
        this.password = password;
        this.role = role;
    }
}
