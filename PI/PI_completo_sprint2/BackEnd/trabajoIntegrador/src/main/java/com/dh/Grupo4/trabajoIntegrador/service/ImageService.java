package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.Image;
import com.dh.Grupo4.trabajoIntegrador.model.ImageDTO;
import com.dh.Grupo4.trabajoIntegrador.repository.ICategoryRepository;
import com.dh.Grupo4.trabajoIntegrador.repository.IImageRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service

public class ImageService implements IImageService {

    @Autowired
    IImageRepository imageRepository;

    @Autowired
    ObjectMapper mapper;


    //Método para probar Postman (no es un método obligatorio)
    @Override
    public void createImage (ImageDTO imageDTO){
        Image image = mapper.convertValue(imageDTO, Image.class);
        imageRepository.save(image);
    };


    @Override
    public Collection<ImageDTO> getHousingByTitle(String title){
        Collection<Image> images = imageRepository.findHousingByTitle(title);
        Set<ImageDTO> imagesDTO =new HashSet<>();
        for (Image image: images) {
            imagesDTO.add(mapper.convertValue(image,ImageDTO.class));
        }
        return imagesDTO;
    }


    @Override
    public ImageDTO getMainHousingByTitle(String title){
        Image found = imageRepository.findMainHousingByTitle(title);
        return mapper.convertValue(found, ImageDTO.class);
    }





}
