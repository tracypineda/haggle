import React from "react";
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <p><a id="githib" href="https://github.com/ApVen77/" target="blank"><i className="fab fa-github gh-icon"></i></a></p>
            <p>Tracy Pineda  &&  April Long</p>
            <p><a id="githib" href="https://github.com/tracypineda/" target="blank"><i className="fab fa-github gh-icon"></i></a></p>
            <p><a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
            <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
            <a href="https://www.google.com" class="fa fa-google"></a>
            <a href="https://www.linkedin.com" class="fa fa-linkedin"></a>
            <a href="https://www.youtube.com" class="fa fa-youtube"></a>
            <a href="https://www.instagram.com" class="fa fa-instagram"></a></p>


        </footer>
    )
}

export default Footer;