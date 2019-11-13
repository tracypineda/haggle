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
                <div style={{height:"200px"}}>
                    <img src="https://i.pinimg.com/originals/ed/76/f7/ed76f7eef192e4a0b1fc66a3aa1f2c00.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div style={{height:"200px"}}>
                    <img src="https://i.pinimg.com/originals/ed/76/f7/ed76f7eef192e4a0b1fc66a3aa1f2c00.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div style={{height:"200px"}}>
                    <img  src="https://www.duffyduffylaw.com/wp-content/uploads/2018/05/user-placeholder-200x250.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div style={{height:"200px"}}>
                    <img  src="https://www.duffyduffylaw.com/wp-content/uploads/2018/05/user-placeholder-200x250.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div style={{height:"200px"}}>
                    <img  src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div style={{height:"200px"}}>
                    <img  src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend">Legend 6</p>
                </div>

            </Carousel>
        );

    }



}


// ReactDOM.render(<Carousel />, document.querySelector('.Carousel'));

export default MyCarousel;