import React from "react";
import "../styles/footer.css"

const Footer = () => {

    return (
        <footer className="footer">
            <p className="footer__text">
                Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna

            </p>
            <img className="footer__logo" src="assets/icongrab.png" alt="prb_header"/>
                <p className="footer__text">
                    All rights reserved to
                    Lorem Ipsum© 2022
                </p>
        </footer>
    )
}

export default Footer;