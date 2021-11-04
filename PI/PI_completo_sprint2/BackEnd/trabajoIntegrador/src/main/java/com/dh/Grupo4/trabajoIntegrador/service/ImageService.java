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

   /* @Autowired
    ModelMapper modelMapper;*/


    /*@Override
    public ImageDTO readImage(Long id) {
        Optional<Image> found = imageRepository.findById(id);
        return mapper.convertValue(found, ImageDTO.class);
    }*/

    //Método para probar Postman (no es un método obligatorio)
    @Override
    public void createImage (ImageDTO imageDTO){
        Image image = mapper.convertValue(imageDTO, Image.class);
        imageRepository.save(image);
    };

    /*@Override
    public Collection<ImageDTO> readImages() {
        return null;
    }*/


   /* public Collection<ImageDTO> getHousingByTitle(String title){
        Collection<Image> images = imageRepository.findHousingByTitle(title);
        return mapper.convertValue(images, ImageDTO.class);
    }*/

    @Override
    public Collection<ImageDTO> getHousingByTitle(String title){
        Collection<Image> images = imageRepository.findHousingByTitle(title);
        Set<ImageDTO> imagesDTO =new HashSet<>();
        for (Image image: images) {
            imagesDTO.add(mapper.convertValue(image,ImageDTO.class));
        }
        return imagesDTO;
    }


//    public Collection<FeatureDTO> readFeatures() {
//        List<Feature> features = featureRepository.findAll();
//        Set<FeatureDTO> featureDTOS =new HashSet<>();
//        for (Feature feature: features) {
//            featureDTOS.add(mapper.convertValue(feature,FeatureDTO.class));
//        }
//        return featureDTOS;
//    }

  /*  @Override
    public ImageDTO getMainHousingByTitle(String title){
        Image found = imageRepository.findMainHousingByTitle(title);
        return mapper.convertValue(found, ImageDTO.class);
    }*/





}
