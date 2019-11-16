import React, { Component, onChange, onClickItem } from "react";
import "./carousel.scss";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
//import Swipe from 'react-easy-swipe';

class MyCarousel extends Component {

    render() {
        return (
            <Carousel className="carousel" showArrows={true} onChange={onChange} onClickItem={onClickItem}>
                <div style={{height: "100px", weight: "100px"}}>
                <img style={{width: "770px"}}  src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                
                    <p className="legend" ><h2>Not Only Hags Like to Haggle..</h2></p>
                </div>
                <div>
                    <img style={{width: "770px"}} src="https://s3-media4.fl.yelpcdn.com/bphoto/fXafITfTXZbNYnB9VImT7A/ls.jpg" />
                    <p className="legend"><h2><strong>Services</strong></h2></p>
                </div>
                <div>
                    <img style={{width: "770px"}}  src="https://www.teq.com/wp-content/uploads/2016/12/electronics-coding-bundle-elementary.jpg" />
                    <p className="legend"><h2><strong>Electronics</strong></h2></p>
                </div>
                <div >
                    <img style={{width: "770px"}}  src="https://i.etsystatic.com/17692061/r/il/79e6c0/1824075933/il_570xN.1824075933_7eqo.jpg" />
                    <p className="legend"><h2><strong>Clothing</strong></h2></p>
                </div>
                <div >
                    <img style={{width: "770px"}}  src="https://everyg.com/uploads/everyg.com/products/2019/03/thumb590/egatidecleaningbundlepickuponlyphiladelphiabroadandolneyareanodelivery-15675347297024.jpg" />
                    <p className="legend"><h2><strong>Household Goods</strong></h2></p>
                </div>
                <div >
                    <img style={{width: "770px"}}  src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend"><h2><strong>And...So Much More...</strong></h2></p>
                </div>

            </Carousel>
        );

    }



}


// ReactDOM.render(<Carousel />, document.querySelector('.Carousel'));

export default MyCarousel;