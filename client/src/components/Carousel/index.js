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
                <div>
                    <img src="https://www.dhresource.com/0x0/f2/albu/g6/M00/31/50/rBVaR1qenv6AVJrUAAPQJ8FylfM514.jpgs://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend" >**Featured Haggles**</p>
                </div>
                <div>
                    <img style={{width: "200px"}} src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend">**Featured Haggles**</p>
                </div>
                <div>
                    <img  src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend">**Featured Haggles**</p>
                </div>
                <div >
                    <img  src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend">**Featured Haggles**</p>
                </div>
                <div >
                    <img  src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend">**Featured Haggles**</p>
                </div>
                <div >
                    <img  src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend">**Featured Haggles**</p>
                </div>

            </Carousel>
        );

    }



}


// ReactDOM.render(<Carousel />, document.querySelector('.Carousel'));

export default MyCarousel;