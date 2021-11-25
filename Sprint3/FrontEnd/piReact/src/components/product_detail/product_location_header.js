import React, { useState, useEffect, useParams } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MdArrowBackIos } from 'react-icons/md'; // Importo ícono de flecha.
import { Link } from 'react-router-dom';
import { faSolidFaChevronLeft } from '@fortawesome/free-solid-svg-icons'; //Importo ícono de FontAwesome.
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/product_detail/productLocationHeader.module.css';
/* const location = useLocation(); */

const ProductLocationHeader = ({ product }) => {
    return (

        <div id={styles.container_header}>
            <div>
                <h3 className={styles.h3_header}><FontAwesomeIcon icon={faMapMarkerAlt} /> {product.city.name}, {product.city.countryName}</h3>
                <h2 id={styles.h2_header}>A 940 m del centro</h2>
            </div>
            <div>
                <h3>Muy bueno</h3>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <div>
                    <p>8</p>
                </div>
            </div>
        </div>



    )
}


export default ProductLocationHeader;