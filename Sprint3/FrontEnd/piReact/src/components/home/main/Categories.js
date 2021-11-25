import React, { useState } from "react";
import CardCategory from "./CardCategory";
import data from "../../../json/bloqueListado.json"

// const arrayCategories = [data[0], data[2], data[4], data[6]];


function Categories({categories, handleSelectCategory}) {
    console.log(categories);
    return (

        <>
            <section className="categories" >
                <h2 className="titleCategories">Buscar por tipo</h2>
                <div className="cardsContainer">
                    {categories.map(function (category) {
                        return (
                            <CardCategory img={category.urlimg} type={category.title} handleSelectCategory={handleSelectCategory}/>
                        )
                    })}
                </div>
            </section>
        </>
    );

}

export default Categories;