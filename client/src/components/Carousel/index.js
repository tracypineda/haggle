import React, { Component, onChange, onClickItem, onClickThumb } from "react";
import "./carousel.scss";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Swipe from 'react-easy-swipe';

function MyCarousel() {
    const react = require('react');
    const reactDOM = require('react-dom');
    const carousel = require('react-responsive-carousel').Carousel;

        return (
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
    
        
    }
    

// ReactDOM.render(<Carousel />, document.querySelector('.Carousel'));
    
export default MyCarousel;