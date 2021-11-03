import React from 'react';
import CardRecom from './CardRecom';
import data from "../../json/bloqueListado.json";

function Recom() {
    return (
    <>
        <section className="recom"> 
            <h2 class="titleRecom">Recomendaciones</h2>
                <div className="cardContainerRecom">
                {data.map((card, index)=>{ 
                console.log(card.title)
                return <CardRecom key={index} img={card.img} category={card.category} title={card.title} location={card.location} description={card.description } />
            })}
            </div>
        </section>
    </>
    );
}

export default Recom;