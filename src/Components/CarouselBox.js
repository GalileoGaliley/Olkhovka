import React from "react";

import Carousel from "react-bootstrap/Carousel";
import images1 from '../Images/Muka1.jpg';
import images2 from '../Images/muka2.jpg';
import images3 from '../Images/muka3.jpg'

export default function CarouselBox (){

    return(
        <>
        <div className = {'Carousel p-0 '}>
            <Carousel>
                <Carousel.Item>
                    <img
                    className={'d-block w-100'}
                    src={images1}
                    alt={'Img'}/>
                    <Carousel.Caption className = {'carouselle'}>
                        <h1>Dolorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className={'d-block w-100'}
                    src={images2}
                    alt={'Img1'}/>
                    <Carousel.Caption className = {'carouselle'}>
                        <h1>Dolorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={'d-block w-100'}
                        src={images3}
                        alt={'Img'}/>
                        <Carousel.Caption className = {'carouselle'}>
                            <h1>Dolorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
                        </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        </>
    );
}
