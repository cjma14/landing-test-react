import React from "react";
import "../styles/service.css"

const Service = () => {

    return (
        <section className="service">
            <div className="service__content">
                <h2 className="title-section">Lorem ipsum dolor sit amet</h2>
                <p className="service__descripction">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                </p>
            </div>
            <img className="service__image" src="/assets/Pic1.png" alt="servicios de grab" />
        </section>
    )
}

export default Service;