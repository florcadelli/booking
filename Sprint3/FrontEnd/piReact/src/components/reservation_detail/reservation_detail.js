import React, { useState, useEffect } from 'react'
import ProductHeader from "../product_detail/product_header";
import Policies from "../product_detail/product_policies";
import ReservationInformation from './reservation_information'
import FormInputs from './reservation_form_inputs';
import ReservationDates from './reservation_dates';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Time from './reservation_time';
import styles from '../../styles/reservation_detail/reservationGrid.module.css';

export default function Reservation() {
    const { productId } = useParams()
    const url = `http://3.16.157.192:8080/products/${productId}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })
    const [startDate, setStartDate] = useState("")
    const [finalDate, setFinalDate] = useState("")
    const [time, setTime] = useState("")
    const [city, setCity] = useState("")

    let content = null;

    const handleDates = (dateRange) => {
        console.log("dispara el evento", typeof(dateRange))
        console.log(dateRange[0])
        setStartDate(dateRange[0])
        setFinalDate(dateRange[1])
    }

    const handleTime = (event) => {
        setTime(event.target.value)
    }

    const handleCity = (event) => {
        setCity(event.target.value)
    }

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
                <div className={styles.reservation_container_grid}>
                    <div className={styles.forminputs}>
                        <FormInputs handleCity={handleCity}/>
                    </div>
                    <div className={styles.reservationDates}>
                        <ReservationDates handleDates={(dateRange) => handleDates(dateRange)}/>
                    </div>
                    <div className={styles.reservationTime}>
                        <Time handleTime={handleTime}/>
                    </div>
                    <div className={styles.reservationinformation}>
                        <ReservationInformation city={city} time={time} startDate={startDate} finalDate={finalDate} product={product.data} className={styles.reservationinformation} />
                    </div>

                </div>

                <Policies />
            </>

    }

    return (
        <div>
            {content}
        </div>
    )
}