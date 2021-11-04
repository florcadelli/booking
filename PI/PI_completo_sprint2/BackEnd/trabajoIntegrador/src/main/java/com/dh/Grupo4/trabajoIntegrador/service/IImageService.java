package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.CategoryDTO;
import com.dh.Grupo4.trabajoIntegrador.model.Image;
import com.dh.Grupo4.trabajoIntegrador.model.ImageDTO;

import java.util.Collection;

public interface IImageService {

    public void createImage (ImageDTO imageDTO);

    public Collection<ImageDTO> getHousingByTitle(String title);

    public ImageDTO getMainHousingByTitle(String title);


}
