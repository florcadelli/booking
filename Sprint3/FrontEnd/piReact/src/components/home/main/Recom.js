import React from 'react';
import CardRecom from './CardRecom';
import data from "../../../json/bloqueListado.json";

class Recom extends React.Component {

    constructor(props) {
    super(props);
    }

    render() {
        /* console.log("HANDLE_recom")
        console.log(this.props.handleClick)
        const aux = this.props.handleClick; */
        return (
            <>
                <section className="recom">
                    <h2 class="titleRecom">Recomendaciones</h2>
                    <div className="cardContainerRecom">
                        {this.props.products.map(function (product, index) {
                            return (
                                
                                <CardRecom /* handleClick={aux} */ key={index} id={product.id} img={product.images[0].url} category={product.category.title} title={product.name} location={product.city.name} description={product.description} />
                            )
                        })}
                        {/* Genero las cards con los productos obetnidos de la API. */}
                        {/* {this.state.products.map((product)=>{ 
                        console.log(product.name)
                        return <CardRecom key={product.id} id={product.id} img={product.images[0]} category={product.category} title={product.name} location={product.city} description={product.description } />
                        })} */}
                    </div>
                </section>
            </>
        );
    }
}


export default Recom;