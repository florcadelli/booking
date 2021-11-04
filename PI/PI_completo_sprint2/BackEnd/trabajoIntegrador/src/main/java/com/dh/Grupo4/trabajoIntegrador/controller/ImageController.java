package com.dh.Grupo4.trabajoIntegrador.controller;


import com.dh.Grupo4.trabajoIntegrador.model.ImageDTO;
import com.dh.Grupo4.trabajoIntegrador.service.IImageService;
import com.dh.Grupo4.trabajoIntegrador.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/images")
public class ImageController {

    @Autowired
    IImageService iImageService;


    @PostMapping("/add")
    public ResponseEntity<?> addImage(@RequestBody ImageDTO img) {
        iImageService.createImage(img);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    //Listar las caracteristicas
    @GetMapping("/list/{title}")
    public Collection<ImageDTO> getImages(@PathVariable String title){
        return iImageService.getHousingByTitle(title);
    }

    @GetMapping("{title}")
    public ImageDTO getMainImage(@PathVariable String title){
        return  iImageService.getMainHousingByTitle(title);
    }

}
