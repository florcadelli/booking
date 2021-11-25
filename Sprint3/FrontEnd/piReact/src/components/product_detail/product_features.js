import React from 'react';
import styles from '../../styles/product_detail/productFeaturesStyle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake, faSink, faCar, faWifi, faTv, faPaw, faSwimmer } from '@fortawesome/free-solid-svg-icons'; //Importo ícono de FontAwesome.

export default function Features({product}) {
    const features = product.features;

    const getIcons = (icons) => {
        switch (icons) {
            case "faSnowflake":
                return faSnowflake;
                break;
            case "faSink":
                return faSink;
                break;
            case "faCar":
                return faCar;
                break;
            case "faWifi":
                return faWifi;
                break;
            case "faTv":
                return faTv
                break;
            case "faPaw":
                return faPaw;
                break;
            case "faSwimmer":
                return faSwimmer;
                break;
        }
    }

    return (
        <div id={styles.container_features}>
            <h2 id={styles.title_h2}>¿Qué ofrece este lugar?</h2>
            <hr className={styles.hr_detail} />
            <div id={styles.container_items}>
                {features.map(function (feature, index) {
                    return (
                        <div>
                            <FontAwesomeIcon key={index} className={styles.icon} icon={getIcons(feature.icon)} />
                            <p key={index + 1} className={styles.paragraph}>{feature.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}