import React, { useState, useContext  } from 'react';
import Swal from 'sweetalert2'; // Importo SweetAlert
import { useNavigate } from "react-router-dom"; // Importo los componentes de React Router.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/reservation_detail/reservationInformation.module.css';
import Context from '../../context/userContext';

export default function Reservation({ product, startDate, finalDate, time, city }) {

    const navigation = useNavigate()
    const [vaccine, setVaccine] = useState(false);
    const [extraText, setExtraText] = useState("");
    const { jwt } = useContext(Context);

    /* console.log("Hijo, fechas:") // Debug 
    console.log(startDate)
    console.log(finalDate) */

    let data = {};
    let settings = {};
    let URL = 'http://3.16.157.192:8080/reservations';
    let bearer = jwt

    const handleClick = () => {

        if (startDate !== "" && finalDate !== "" && time !== "" && city !== "") {

            data = {
                startTime: time,
                startDate: startDate,
                finalDate: finalDate,
                vaccinated: vaccine,
                sellerData: extraText,
                product: {
                    id: product.id
                },
                user: {
                    id: 1 //hardcodeo momentáneo
                }
            }

            console.log(data);

            settings = {
                method: 'POST',
                /* withCredentials: true,
                credentials: 'include', */
                
                headers: {
                    /* authorization: bearer, */
                    'Content-type': 'application/json',
                    /* 'mode': 'no-cors' */
                },
                body: JSON.stringify(data)
            }

            fetch(URL, settings)
            .then(response => response.text())
            .then( () => {(
                Swal.fire({
                imageUrl: 'https://bucketdigitalbooking4.s3.us-east-2.amazonaws.com/checkIcon.svg',
                imageHeight: 150,
                title: `<h5 style='color:#FBC02D'>¡Muchas gracias!</h5>`,
                text: 'Su reserva se ha realizado con éxito',
                confirmButtonColor: '#FBC02D',
                backdrop: `rgba(0,0,123,0.4)`
                /* backdrop: `#f8c84e85` */
                }).then(() => {
                    navigation("/home")
                })
            )})
            .catch( () => {
                Swal.fire({
                    icon: 'error',
                    toast: true,
                    position: 'center',
                    showConfirmButton: true,
                    text: 'Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde',
                    iconColor: '#FBC02D',
                    confirmButtonColor: '#FBC02D' ,
                    confirmButtonText: 'Aceptar'
                })
            })

        } else {
            Swal.fire({
                icon: 'warning',
                toast: true,
                position: 'top',
                timer: 2500,
                timerProgressBar: true,
                showConfirmButton: false,
                text: 'Por favor, complete todos los campos obligatorios.',
                background: '#FBC02D', 
                iconColor: '#FFFFFF'/*,
                confirmButtonColor: '#FBC02D' ,
                confirmButtonText: 'Volver a intentar' */
            })
        }
        
    }

    const handleChange = (event) => {
        setExtraText(event.target.value)
    }

    const handleCheckbox = (event) => {
        console.log("Checkbox")
        console.log(event.target.checked)
        setVaccine(event.target.checked)
    }

    return (
        <div className={styles.reservation_container}>
            <div>
                <h2 className={styles.reservation_h2}>Detalle de la reserva</h2>
                <div className={styles.reservation_image}>
                    <img src={product.images[0].url} alt="" />
                </div>
            </div>
            <div className={styles.detail_reservation_tablet}>
                <div className={styles.reservation_detail_name}>
                    <h3>{(product.category.title).toUpperCase()}</h3>
                    <h2>{product.name}</h2>
                    <div className={styles.reservation_stars}>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
                <div className={styles.reservation_location}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <p> Av. Colon 1643, {product.city.name}, {product.city.countryName}</p>
                </div>
                <hr className={styles.reservation_line} />
                <div className={styles.reservation_check}>
                    <p>Check in</p>
                    <p>{startDate ? `${startDate.getDate()}/${startDate.getMonth()+1}/${startDate.getYear()+1900}` : ""}</p>
                </div>
                <hr className={styles.reservation_line} />
                <div className={styles.reservation_check}>
                    <p>Check out</p>
                    <p>{finalDate ? `${finalDate.getDate()}/${finalDate.getMonth()+1}/${finalDate.getYear()+1900}` : ""}</p>
                </div>
                <hr className={styles.reservation_line} />

                <label className={styles.extraData}> Datos para el vendedor {/* Campo opcional */}
                    <textarea onChange={handleChange}/>
                </label>

                <hr className={styles.reservation_line} />

                <label className={styles.vaccine}> Vacuna COVID-19 {/* Campo opcional */}
                    <input onChange={handleCheckbox} type="checkbox"/>
                </label>
                
                <button onClick={handleClick} className={styles.reservation_button}>Confirmar reserva</button>
            </div>
        </div>
    )
}