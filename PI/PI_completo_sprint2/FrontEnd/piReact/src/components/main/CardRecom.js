import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faSwimmer, faWifi} from '@fortawesome/free-solid-svg-icons';
import iconStar from '../../assets/img/iconStar.svg';
import iconSwimming from '../../assets/img/iconSwimming.svg';
import data from "../../json/bloqueListado.json";

/* class CardRecom extends React.Component{
    constructor(props){
        super();
        this.state = {}
    }
    

    render(){
        return(
            <div className="cardContainerRecom">
                    <div className="cardRecom">
                        <div className="card-bg">
                        <FontAwesomeIcon icon={faHeart} />   
                        <img src=""></img>
                        </div>
                        <div className="card-texto">
                            <div className="ranking"> 
                                <div>
                                    <h4>CASAS <img src={iconStar} alt=""/><img src={iconStar} alt=""/><img src={iconStar} alt=""/><img src={iconStar} alt=""/><img src={iconStar} alt=""/> </h4>
                                    <h3>{this.props.title}</h3>
                                </div>
                                <div className="rankingContainer">
                                    <a className="btnRanking" href="">8</a>
                                    <h4>Muy bueno</h4>
                                </div>
                            </div>
                            <h4><i className="fas fa-map-marker-alt"></i> A 920 km del centro <span>MOSTRAR EN EL MAPA</span></h4>
                            <div className="icons"> 
                            <FontAwesomeIcon icon={faWifi}/>
                            <FontAwesomeIcon icon={faSwimmer}/>
                            </div>
                            <p>{} <span>más...</span> </p>
                            <a className="btnVerMas" href="">ver más</a>
                        </div>
                    </div>
                </div>
        )
    }
} */
const CardRecom = ({img, category, title, location, description} ) => {
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
                                    <h5>{category.toUpperCase()} <img src={iconStar} alt=""/><img src={iconStar} alt=""/><img src={iconStar} alt=""/><img src={iconStar} alt=""/><img src={iconStar} alt=""/> </h5>
                                    <h3>{title}</h3>
                                </div>
                                <div className="rankingContainer">
                                    <a className="btnRanking" href="">8</a>
                                    <h4>Muy bueno</h4>
                                </div>
                            </div>
                            <h4><i className="fas fa-map-marker-alt"></i> {location} <span className="spanMain">MOSTRAR EN EL MAPA</span></h4>
                            <div className="icons"> 
                            <FontAwesomeIcon icon={faWifi}/>
                            <img src={iconSwimming} alt=""/>
                            </div>
                            <p class="descripText">{description} </p> <span className="spanMain">más...</span> 
                            <a className="btnVerMas" href="">ver más</a>
                            
                        </div>
                    </div>
                       
    </>
    );
} 

export default CardRecom;