import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSwimmer, faWifi } from '@fortawesome/free-solid-svg-icons';
import iconStar from '../../../assets/img/iconStar.svg';
import iconSwimming from '../../../assets/img/iconSwimming.svg';
import data from "../../../json/bloqueListado.json";
import {Link, Redirect, withRouter, Outlet} from "react-router-dom"; // Importo los componentes de React Router.
import { checkPropTypes } from 'prop-types';

function CardRecom({ id, img, category, title, location, description }) {
    return (
        <>
            <div className="cardRecom">
                <div className="card-bg">
                    <FontAwesomeIcon icon={faHeart} />
                    <img src={img}></img>
                </div>
                <div className="card-texto">
                    <div className="ranking">
                        <div className="tituloCardRecom">
                            <h5>{category/* DEBE ESTAR EN MAYÚSCULAS PERO TIRA ERROR .toUpperCase() */} <img src={iconStar} alt="" /><img src={iconStar} alt="" /><img src={iconStar} alt="" /><img src={iconStar} alt="" /><img src={iconStar} alt="" /> </h5>
                            <h3>{title}</h3>
                        </div>
                        <div className="rankingContainer">
                            <a className="btnRanking" href="">8</a>
                            <h4>Muy bueno</h4>
                        </div>
                    </div>
                    <h4><i className="fas fa-map-marker-alt"></i> {location} <span className="spanMain">MOSTRAR EN EL MAPA</span></h4>
                    <div className="icons">
                        <FontAwesomeIcon icon={faWifi} />
                        <img src={iconSwimming} alt="" />
                    </div>
                    <p class="descripText">{description} </p> <span className="spanMain">más...</span>
                    <Link className="btnVerMas" to={`/product_detail/${id}`}>Ver más</Link>
                    {/* Después hay que colocarle el id del producto */}
                </div>
                <Outlet/>
            </div>
        </>
    );
}

export default CardRecom;