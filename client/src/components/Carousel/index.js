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
                
                    <p className="legend" ><h1>Welcome to the Haggle Hag Spot</h1></p>
                </div>
                <div>
                    <img style={{width: "770px"}} src="https://cdn.shopify.com/s/files/1/0293/9277/files/Home_-_gn_2_1200X.jpg?v=1561506874" />
                    <p className="legend"><h2><strong>Women's Clothing</strong></h2></p>
                </div>
                <div>
                    <img style={{width: "770px"}}  src="https://recentfashionstyle.files.wordpress.com/2012/06/fashion-trends-for-men.jpg" />
                    <p className="legend"><h2><strong>Men's Clothing</strong></h2></p>
                </div>
                <div >
                    <img style={{width: "770px"}}  src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-img.instyle.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F684xflex%2Fpublic%2Fimages%2F2012%2FGALLERY%2F090412-vibrant-LEAD-400_0.jpg%3Fitok%3DC1-lL9ZJ&w=400&q=85" />
                    <p className="legend"><h2><strong>Bags and Shoes</strong></h2></p>
                </div>
                <div >
                    <img style={{width: "770px"}}  src="https://st4.depositphotos.com/3737897/20813/i/1600/depositphotos_208131672-stock-photo-clothing-accessories-men-women-ready.jpg" />
                    <p className="legend"><h2><strong>Accessories</strong></h2></p>
                </div>
                <div >
                    <img style={{width: "770px"}}  src="https://static5.depositphotos.com/1000797/453/v/450/depositphotos_4532300-stock-illustration-woman-in-red.jpg" />
                    <p className="legend"><h2><strong>And...So Much More...
                                                        Sign-in to See...</strong></h2></p>
                </div>

            </Carousel>
        );

    }



}


// ReactDOM.render(<Carousel />, document.querySelector('.Carousel'));

export default MyCarousel;