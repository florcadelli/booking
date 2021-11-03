package com.dh.Grupo4.trabajoIntegrador.controller;

import com.dh.Grupo4.trabajoIntegrador.model.Category;
import com.dh.Grupo4.trabajoIntegrador.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private ICategoryService categoryService;

    @PostMapping()
    public ResponseEntity<Category> addCategory(@RequestBody Category category){

        return ResponseEntity.ok(categoryService.createCategory(category));

    }

    @GetMapping("/{id}")
    public Optional<Category> readCategory(@PathVariable Long id){

        return categoryService.readCategory(id);

    }

    @PutMapping
    public ResponseEntity<Category> updateCategory(@RequestBody Category category){

        ResponseEntity<Category> response = null;

        if (category.getId() != null && categoryService.readCategory(category.getId()).isPresent())
            response = ResponseEntity.ok(categoryService.updateCategory(category));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable Long id){

        categoryService.deleteCategory(id);
        return ResponseEntity.status(HttpStatus.OK).body("deleted.");

    }

    @GetMapping("/list")
    public Collection<Category> readCategories (){

        return categoryService.readCategories();

    }

}
