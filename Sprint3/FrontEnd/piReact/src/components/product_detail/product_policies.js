import React from 'react';
import styles from '../../styles/product_detail/productPoliciesStyle.module.css';

export default function Policies () {
    return (
        <div id={styles.container_policies}>
            <h2 id={styles.h2_policies}>Qué tenés que saber</h2>
            <hr id={styles.hr_policies}/>

            {/*Estas normas después se inyectan con la API.*/}
            {/*Ahora las dejo hardcodeadas.*/}

            <div id={styles.container_rules}>
                <div>
                    <h3 className={styles.h3_policies}>Normas de la casa</h3>
                    <p className={styles.paragraph}>Check-out: 10:00</p>
                    <p className={styles.paragraph}>No se permiten fiestas</p>
                    <p className={styles.paragraph}>No fumar</p>
                </div>
            <div>
                    <h3 className={styles.h3_policies}>Salud y Seguridad</h3>
                    <p className={styles.paragraph}>Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus</p>
                    <p className={styles.paragraph}>Detector de humo</p>
                    <p className={styles.paragraph}>Depósito de seguridad</p>
                </div>
                <div>
                    <h3 className={styles.h3_policies}>Política de cancelación</h3>
                    <p className={styles.paragraph}>Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía</p>
                </div>
            </div>
            
        </div>
    )
}