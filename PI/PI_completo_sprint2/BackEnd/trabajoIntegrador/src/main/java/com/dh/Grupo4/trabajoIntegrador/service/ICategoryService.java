package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.Category;

import java.util.Collection;
import java.util.Optional;

public interface ICategoryService {

    public Category createCategory(Category category);

    public Optional<Category> readCategory (Long id);

    public Category updateCategory (Category category);

    public void deleteCategory (Long id);

    public Collection<Category> readCategories ();

}
