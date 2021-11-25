import React from 'react';
import styles from '../../styles/reservation_detail/reservationFormInputs.module.css';

export default function FormInputs({handleCity}) {
    return (
        <form name="reservation_form" className={styles.reservation_form}>
            <h2 className={styles.reservation_form_title}>Completá tus datos</h2>
            <div className={styles.inputs_reservation}>
                <label className={styles.form_label}>
                    Nombre
                    <input value="Diego" type="text" name="name" id="name" className={styles.form_input} disabled/>
                </label>
                <label className={styles.form_label}>
                    Apellido
                    <input value="Testa" type="text" name="lastName" id="lastName" className={styles.form_input} disabled/>
                </label>
                <label className={styles.form_label}>
                    Correo electrónico
                    <input value="diego@gmail.com" type="email" name="email" id="email" className={styles.form_input} disabled/>
                </label>
                <label className={styles.form_label}>
                    <div>Ciudad <span class="asterisk_input"></span></div>
                    <input onChange={handleCity} type="text" name="city" id="city" placeholder="Ciudad" className={styles.form_input} required/>
                </label>
            </div>
        </form>
    )
}