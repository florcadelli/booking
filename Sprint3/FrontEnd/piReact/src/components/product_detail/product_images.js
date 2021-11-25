import React from 'react';
import styles from '../../styles/product_detail/productImageStyle.css';
import { RiHeartLine } from 'react-icons/ri';
import { IoShareSocialOutline } from 'react-icons/io5';
import { useState } from "react";
import Product from './product_detail';
import ImageGallery from 'react-image-gallery';

const Images = ({ setOpenGallery, product }) => {

    return (
        <>
            <div className='reactions'>
                <IoShareSocialOutline className='icons' />
                <RiHeartLine className='icons' />
            </div>

            <div className='imgsResponsive'>
                {/* <ImageGallery
                    items={product.images.map( function (image) {
                        return(
                        [
                            {
                                original: image.url,
                                thumbnail: image.url
                            }
                        ]
                        )})}
                    showIndex={true}
                    showPlayButton={false}
                    showThumbnails={false}
                    showNav={false}
                /> */}
            </div>

            <section className='container_imgs'>
                <div className='big_img'>
                    <img src={product.images[0].url} alt="Selected" className="selected" />
                </div>
                <div className='little_imgs'>

                    <div className='imgL'> <img src={product.images[1].url} /> </div>
                    <div className='imgL'> <img src={product.images[2].url} /> </div>
                    <div className='imgL'> <img src={product.images[3].url} /> </div>
                    <div className='imgL'> <img src={product.images[4].url} /> </div>

                    <a href='' onClick={(e) => {
                        e.preventDefault();
                        setOpenGallery(true)
                    }} >Ver más</a>
                </div>
            </section>

        </>
    );

}


export default Images;
