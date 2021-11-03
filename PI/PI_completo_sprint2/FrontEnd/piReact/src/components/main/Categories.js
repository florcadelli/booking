import React from "react";
import CardCategory from "./CardCategory";
import data from "../../json/bloqueListado.json"

const arrayCategories = [data[0], data[2], data[4], data[6]];

console.log(arrayCategories);

function Categories() {

    return (

        <>
            <section className="categories">

                <h2 className="titleCategories">Buscar por tipo</h2>
                <div className="cardsContainer">
                    {arrayCategories.map(({img, category}) => {
                        return <CardCategory img={img} type={category}/>
                    })}
                </div>

            </section>
        </>

    );

}

export default Categories;