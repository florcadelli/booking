import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect, useParams } from 'react-router-dom'; // Importo componente para utilizar Router.
import Images from './product_images'
import Description from './product_description'
import Location from './product_location'
import ProductLocationHeader from "./product_location_header";
import Policies from "./product_policies"; // Importo componente de las políticas del producto.
import ProductHeader from "./product_header"; // Importo componente del nuevo header.
import Features from './product_features'; // Importo componente de características.
import CarouselMain from "./carousel";
import Dates from './product_dates'; //Importo componente de fechas.
import axios from 'axios';

export default function Product() {
    const [openGallery, setOpenGallery] = useState(false);
    const { productId } = useParams()
    const url = `http://3.16.157.192:8080/products/${productId}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })

    let content = null;

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setProduct({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setProduct({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    if (product.error) {
        content = <p>Error</p>
    }

    if (product.loading) {
        content = <p>Cargando</p>
    }

    if (product.data) {
        content =
            <>
                <ProductHeader product={product.data} />
                {/* Falta cuerpo del detalle del producto */}
                {/* <ProductLocationHeader product={product.data}/> */}

                <main>
                    <Images product={product.data} setOpenGallery={setOpenGallery} />
                    {openGallery ?
                        <CarouselMain setOpenGallery={setOpenGallery} product={product.data} /> : <></>
                    }
                    <Description product={product.data} />
                    <Features product={product.data} />
                    <Dates productID={productId} />
                    <Location product={product.data} />
                    <Policies />
                </main>

            </>

    }

    return (
        <div>
            {content}
        </div>
    )

}
