import React, { useState, useEffect, useParams } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MdArrowBackIos } from 'react-icons/md'; // Importo ícono de flecha.
import { Link, useNavigate } from 'react-router-dom';
import { faSolidFaChevronLeft } from '@fortawesome/free-solid-svg-icons'; //Importo ícono de FontAwesome.
import styles from '../../styles/product_detail/productHeader.module.css';

const ProductHeader = ({product}) => {
    const navigate = useNavigate();
    return (

        <div id={styles.container_header}>
            <div>
                <h3 className={styles.h3_header}>{(product.category.title).toUpperCase()}</h3>
                <h2 id={styles.h2_header}>{product.name}</h2>

            </div>
            {/* <Link to="/home"><MdArrowBackIos id={styles.arrow} /></Link> */}
            <button className={styles.button_navigate}onClick={() => navigate(-1)}><MdArrowBackIos id={styles.arrow} /></button> 
            {/*lo cambio a button para que me rediriga a la pagina anterior tanto desde producto como desde reserva*/}
        </div>



    )
}


export default ProductHeader;