package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.Category;
import com.dh.Grupo4.trabajoIntegrador.repository.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class CategoryService implements ICategoryService {

    @Autowired
    ICategoryRepository categoryRepository;

    //mapper?

    public Category createCategory(Category category){

        return categoryRepository.save(category);

    }

    public Optional<Category> readCategory (Long id){

        return categoryRepository.findById(id);

    }

    public Category updateCategory (Category category){

        return categoryRepository.save(category);

    }

    public void deleteCategory (Long id){

        categoryRepository.deleteById(id);

    }

    public Collection<Category> readCategories (){

        return categoryRepository.findAll();

    }

}
