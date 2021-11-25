package com.dh.Grupo4.trabajoIntegrador.model.DTO;


import com.dh.Grupo4.trabajoIntegrador.model.Category;
import com.dh.Grupo4.trabajoIntegrador.model.City;
import com.dh.Grupo4.trabajoIntegrador.model.Feature;
import com.dh.Grupo4.trabajoIntegrador.model.Image;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Getter @Setter
public class ProductDTO {

    private Long id;
    private String name;
    private String description;
    private String title_description;
    private Double latitude;
    private Double longitude;
    private List<Image> images;
    private Category category;
    private City city;
    private Set<Feature> features;

    public ProductDTO() {
    }


    public ProductDTO(String name, String description, String title_description, Double latitude, Double longitude, List<Image> images, Category category, City city, Set<Feature> features) {
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
}
