import React from "react";
import "../styles/media-menu.css"
const MediaMenu = () => {

    return (
        <aside className="media-menu">
            <i className="fa-brands fa-facebook media-menu__item"></i>
            <i className="fa-brands fa-twitter media-menu__item"></i>
            <i className="fa-brands fa-instagram media-menu__item"></i>
            <i className="fa-brands fa-youtube media-menu__item"></i>
            <i className="fa-brands fa-tiktok media-menu__item"></i>
        </aside>
    )
}

export default MediaMenu;