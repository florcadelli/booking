package com.dh.Grupo4.trabajoIntegrador.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table (name = "categories")
@Getter @Setter

public class Category {

    @Id
    @GeneratedValue
    private Long id;

    private String title;
    private String description;
    private String urlimg;

    // la comento porque no dice en la issue que tiene que ser bidireccional la relación
    /*@OneToMany (mappedBy = "category")
    @JsonIgnore // para que no entre en un ciclo infinito
    private Set<Product> products = new HashSet<>();*/

    public Category(){}

    public Category(String title, String description, String urlimg) {
        this.title = title;
        this.description = description;
        this.urlimg = urlimg;
    }

    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", urlimg='" + urlimg + '\'' +
                '}';
    }

}
