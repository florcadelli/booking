package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.Category;
import com.dh.Grupo4.trabajoIntegrador.model.CategoryDTO;

import java.util.Collection;
import java.util.Optional;

public interface ICategoryService {

    public void createCategory(CategoryDTO categoryDTO);

    public CategoryDTO readCategory (Long id);

    public void updateCategory (CategoryDTO categoryDTO);

    public void deleteCategory (Long id);

    public Collection<CategoryDTO> readCategories ();

}
