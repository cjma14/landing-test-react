import React from "react";
import "../styles/header.css"

const Header = () => {

    return (
        <header className="header">
        <div className="header__container">
            <div className="header__item header__item--live">
                <span>Live</span>
                <img className="header__iconlive" src="/assets/icons/radio-sharp.svg" alt="icon-live"/>
            </div>
            <div className="header__item"> Lorem ipsu dolor sit amet </div>
            <div className="header__item header__item--join">
                <span>Join Now</span>
                <i className="fa-regular fa-circle-play"></i>
            </div>
        </div>
    </header>
    )
}

export default Header;