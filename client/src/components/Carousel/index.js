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
                <div style={{height: "200px", weight: "300px"}}>
                    <img src="image=https%3A%2F%2Fcfcdn.zulily.com%2Fimages%2Fcache%2Fproduct%2F480x1000%2F378099%2Fzu73436346_main_tm1560442260.jpg" />
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