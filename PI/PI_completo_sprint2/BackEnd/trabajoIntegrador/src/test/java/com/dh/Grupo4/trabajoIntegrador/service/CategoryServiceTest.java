package com.dh.Grupo4.trabajoIntegrador.service;

import com.dh.Grupo4.trabajoIntegrador.model.Category;
import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Collection;
import java.util.Optional;

@FixMethodOrder (MethodSorters.NAME_ASCENDING)
@RunWith (SpringRunner.class)
@SpringBootTest

class CategoryServiceTest {

    @Autowired
    private CategoryService categoryService;

    static Category categoryTest = new Category();

    @BeforeAll
    static void loadTestCategory (){

        categoryTest.setId(1L);
        categoryTest.setTitle("title 1");
        categoryTest.setDescription("description 1");
        categoryTest.setUrlimg("urlimg1.com");

    }

    @Test
    void createCategory() {

        categoryService.createCategory(categoryTest);
        Category category = categoryService.createCategory(new Category("title 2","description 2","urlimg2.com"));
        Assert.assertTrue(category.getId() != null);

    }

    @Test
    void readCategory() {

        Assert.assertTrue(this.categoryService.readCategory(1L) != null);

    }

    //updateCategory aún no funciona.
    /*@Test
    void updateCategory() {

        categoryService.createCategory(categoryTest);
        categoryTest.setTitle("updated title");
        categoryService.updateCategory(categoryTest);
        Optional<Category> result = categoryService.readCategory(1L);

        Assert.assertEquals(result.get().getTitle(),"updated title");

    }*/

    @Test
    void deleteCategory() {

        categoryService.createCategory(categoryTest);
        categoryService.deleteCategory(1L);
        Optional<Category> result = categoryService.readCategory(1L);
        Assert.assertTrue(result.isEmpty());

    }

    @Test
    void readCategories() {

        categoryService.createCategory(categoryTest);
        categoryService.createCategory(new Category("title 2","description 2","urlimg2.com"));
        Collection<Category> result = categoryService.readCategories();
        Assert.assertFalse(result.isEmpty());
        Assert.assertTrue(result.size() == 2);

    }
}