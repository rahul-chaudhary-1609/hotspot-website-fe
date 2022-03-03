import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import BeFreeLessPhoneImage from "../../assets/images/hotspot_be_free_less.png"

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
            heading:"Who is Hotspot",
            desc:"Hotspot offers Fee-Less deliveries on every order from every restaurant!",
        },
        {
            heading:"Set Delivery Times",
            desc:"Hotspot delivers at set times! Just set it and forget it!",
        },
        {
            heading:"Exclusive Service",
            desc:"Hotspot's Fee-Less delivery service are exclusive to Hotspot users! Download the app today!",
        }
    ]
    return (<>
        <div className="flex-row w-100">
            <div className="w-25">                    
                <img className="w-100" src={BeFreeLessPhoneImage} alt="First slide" />
            </div>
            <div className="w-75 flex-row-carousel">
                <Carousel className=" carousel-div" showArrows={false} centerMode={false} showStatus={false}>
                    {carouselList.map((card,index)=>{
                        return <CaroudelCard {...{...card}}/>
                    })}
                </Carousel>
            </div>
        </div>
    </>)
}