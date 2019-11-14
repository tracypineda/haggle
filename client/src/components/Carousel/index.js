import React, { Component, onChange, onClickItem } from "react";
// import "./carousel.scss";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
//import Swipe from 'react-easy-swipe';

class MyCarousel extends Component {

    render() {
        return (
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem}>
                <div style={{height: "200px", width: "2000px"}}>
                    <img src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend" >**Featured Haggles**</p>
                </div>
                <div style={{height:"200px", width: "2000px"}}>
                    <img src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend">**Featured Haggles**</p>
                </div>
                <div style={{height:"200px", width: "2000px"}}>
                    <img  src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend">**Featured Haggles**</p>
                </div>
                <div style={{height:"200px", width: "2000px"}}>
                    <img  src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend">**Featured Haggles**</p>
                </div>
                <div style={{height:"200px", width: "2000px"}}>
                    <img  src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend">**Featured Haggles**</p>
                </div>
                <div style={{height:"200px", width: "2000px"}}>
                    <img  src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend">**Featured Haggles**</p>
                </div>

            </Carousel>
        );

    }



}


// ReactDOM.render(<Carousel />, document.querySelector('.Carousel'));

export default MyCarousel;