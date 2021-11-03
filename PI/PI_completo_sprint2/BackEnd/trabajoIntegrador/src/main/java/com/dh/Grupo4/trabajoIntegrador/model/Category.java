package com.dh.Grupo4.trabajoIntegrador.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

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
