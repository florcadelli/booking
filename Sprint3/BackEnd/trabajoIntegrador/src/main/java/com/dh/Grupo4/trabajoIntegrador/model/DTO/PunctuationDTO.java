package com.dh.Grupo4.trabajoIntegrador.model.DTO;

import com.dh.Grupo4.trabajoIntegrador.model.Product;
import com.dh.Grupo4.trabajoIntegrador.model.User;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class PunctuationDTO {

    private Long id;
    private Integer punctuation;
    private Product product;
    private User user;

    public PunctuationDTO() {
    }

    public PunctuationDTO(Integer punctuation,Product product, User user) {
        this.punctuation = punctuation;
        this.product = product;
        this.user = user;
    }


}