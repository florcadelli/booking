import React from 'react';
import styles from '../../styles/product_detail/productLocationStyle.module.css';

const Location = ({product}) => {

    return (
        <>
            <div className={styles.container_location}>
                <h2>¿Dónde vas a estar?</h2>
                <hr/>
            </div>
            <div className={styles.map}>
                <p>{product.city.name}, {product.city.countryName}</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0099033827437!2d-58.38348013448729!3d-34.60391108278013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1636081708888!5m2!1ses!2sar"
                    allowfullscreen="" loading="lazy"></iframe>
            </div>
        </>
    );

}

export default Location;
