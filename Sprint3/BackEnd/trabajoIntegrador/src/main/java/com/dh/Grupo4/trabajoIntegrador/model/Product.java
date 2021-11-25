package com.dh.Grupo4.trabajoIntegrador.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "products")
@Getter @Setter
public class Product {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String description;
    private String title_description;
    private Double latitude;
    private Double longitude;

    @OneToMany
    @JoinColumn(name = "product_id")
    private List<Image> images;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @ManyToOne
    @JoinColumn(name = "city_id", nullable = false)
    private City city;

    @ManyToMany
    @JoinTable(name = "product_feature",
            joinColumns =  @JoinColumn(name = "id_product") ,
            inverseJoinColumns = @JoinColumn(name = "id_feature")
    )
    private Set<Feature> features;

    @OneToMany (mappedBy = "product")// Relación bidireccional
    @JsonIgnore
    private Set<Reservation> reservation;

    @OneToMany(mappedBy = "product") // Relacion bidireccional
    @JsonIgnore
    private Set<Punctuation> punctuation;

    public Product() {
    }


    public Product(String name, String description, String title_description, Double latitude, Double longitude, List<Image> images, Category category, City city, Set<Feature> features) {
        this.name = name;
        this.description = description;
        this.title_description = title_description;
        this.latitude = latitude;
        this.longitude = longitude;
        this.images = images;
        this.category = category;
        this.city = city;
        this.features = features;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
