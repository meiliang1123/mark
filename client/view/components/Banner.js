import React from "react";
import Slider from 'react-slick';


export default class Banner extends React.Component{
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:true,
            autoplay: true,
            autoplaySpeed:2500,
            centerPadding:"50px",
            className:"banner",
        };

        return (
            <Slider {...settings}>
                <div><div className="box"><img src="/product/1/cover.jpg"/></div></div>
                <div><div className="box"><img src="/product/1/cover.jpg"/></div></div>
                <div><div className="box"><img src="/product/1/cover.jpg"/></div></div>
                <div><div className="box"><img src="/product/1/cover.jpg"/></div></div>


            </Slider>
        );
    }
}