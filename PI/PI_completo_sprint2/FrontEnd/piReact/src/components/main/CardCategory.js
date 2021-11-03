import React from "react";
import data from "../../json/bloqueListado.json";

const CardCategory = ({ img, type }) => {

    return (

        <>
            <div className="card">
                <img src={img}></img>
                <div className ="cardText">
                <h3>{type}</h3>
                <p>802.238 {type}</p>
                </div>
            </div>
        </>

    );

}

export default CardCategory;