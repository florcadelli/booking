package com.dh.Grupo4.trabajoIntegrador.repository;

import com.dh.Grupo4.trabajoIntegrador.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface IImageRepository extends JpaRepository<Image,Long> {


    @Query("select a from Image a where a.title=?1")
    Image findMainHousingByTitle(String title);

    @Query("select a from Image a where a.title like ?1%")
    Collection<Image> findHousingByTitle(String title);


}
