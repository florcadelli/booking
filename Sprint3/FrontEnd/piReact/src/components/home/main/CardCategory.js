import React, {useState} from "react";
import data from "../../../json/bloqueListado.json";

const CardCategory = ({ img, type, handleSelectCategory }) => {

    return (

        <>
            <button className="card" onClick={() => {handleSelectCategory(type)}}>
                <img src={img}></img>
                <div className="cardText">
                    <h3>{type}</h3>
                    <p>802.238 {type}</p>
                </div>
            </button>
        </>

    );

}

export default CardCategory;