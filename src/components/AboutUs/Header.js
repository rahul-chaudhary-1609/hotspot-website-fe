import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import BeFreeLessPhoneImage from "../../assets/images/hotspot_be_free_less.jpg"

import "./style.css";

function CaroudelCard(props){
    return (
        <div className="carousel-card">
            <div className="carousel-card-heading">{props.heading}</div>
            <div className="carousel-card-desc">{props.desc}</div>
        </div>
    )
}

export default function Header(){
    let carouselList=[
        {
            heading:"Who Is Hotspot",
            desc:"Hotspot offers free delivery on every order!",
        },
        {
            heading:"Set Delivery Times",
            desc:"Hotspot delivers at set times! Just set it and forget it!",
        },
        {
            heading:"Exclusive Service",
            desc:"Hotspot's free delivery service is exclusive to Hotspot users. Download the app today!",
        }
    ]
    return (<>
        <div className="flex-row w-100">
            <div className="w-25">                    
                <img className="w-100" src={BeFreeLessPhoneImage} alt="First slide" />
            </div>
            <div className="w-75 flex-row-carousel">
                <div className="carousel-div">
                    <Carousel className="carousel-custom" showArrows={true} centerMode={false} showStatus={false}>
                        {carouselList.map((card,index)=>{
                            return <CaroudelCard {...{...card}}/>
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    </>)
}