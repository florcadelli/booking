package com.dh.Grupo4.trabajoIntegrador.controller;


import com.dh.Grupo4.trabajoIntegrador.model.DTO.ProductDTO;
import com.dh.Grupo4.trabajoIntegrador.service.ICategoryService;
import com.dh.Grupo4.trabajoIntegrador.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Date;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private IProductService productService;

    @Autowired
    private ICategoryService categoryService;

    @PostMapping
    public ResponseEntity<?> addProduct(@RequestBody ProductDTO productDTO) {
        productService.createProduct(productDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ProductDTO readProduct(@PathVariable Long id){
        return productService.readProduct(id);
    }

    @PutMapping
    public ResponseEntity<?> updateProduct(@RequestBody ProductDTO productDTO) {
        ResponseEntity<?> response = null;
        if (productDTO.getId() != null && productService.readProduct(productDTO.getId()) != null){
            productService.updateProduct(productDTO);
            response = ResponseEntity.ok(HttpStatus.OK);
        }else{
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id){
        ResponseEntity<String> response = null;
        if(productService.readProduct(id) != null){
            productService.deleteProduct(id);
            response = ResponseEntity.status(HttpStatus.OK).body("Deleted");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @GetMapping("/list")
    public Collection<ProductDTO> readProducts(){
        return productService.readProducts();
    }

    // Filtro por ciudad
    @GetMapping("/listcity/{name}")
    public Collection<ProductDTO> findProductByCity(@PathVariable String name){
        return productService.findProductByCity(name);
    }

    // Filtro por categoría
    @GetMapping("/listcategory/{title}")
    public Collection<ProductDTO> findProductByCategory(@PathVariable String title){
        return productService.findProductByCategory(title);
    }

    //Filtro por ciudad y fechas
    //EJEMPLO URL products/listcitydate/2021-11-06/2022-08-01/Salta
    @GetMapping("/listcitydate/{startDate}/{finalDate}/{name}")
    public Collection<ProductDTO> findProductByCityAndDate(@PathVariable("startDate")
                                                           @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date startDate,
                                                           @PathVariable("finalDate")
                                                           @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date finalDate,
                                                           @PathVariable("name") String name)
    {
        return productService.findProductByDateAndCity(startDate,finalDate,name);
    }

    //Filtro por fechas
    @GetMapping("/listcitydate/{startDate}/{finalDate}")
    public Collection<ProductDTO> findProductByDate(@PathVariable("startDate")
                                                           @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date startDate,
                                                           @PathVariable("finalDate")
                                                           @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date finalDate)

    {
        return productService.findProductByDate(startDate,finalDate);
    }

    //Actualiza puntuacion de un producto
}
