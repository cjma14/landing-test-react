import React from "react";
import "../styles/stats.css"

const Stats = () => {

    return (
        <section className="stats">
            <h2 className="stats__title">Lorem ipsum dolor sit amet, consetetur</h2>
            <article className="stats__items">
                <h3 className="stats__name">170</h3>
                <h4 className="stats__description">days</h4>
            </article>
            <article className="stats__items">
                <h3 className="stats__name">13</h3>
                <h4 className="stats__description">hours</h4>
            </article>
            <article className="stats__items">
                <h3 className="stats__name">39</h3>
                <h4 className="stats__description">minutes</h4>
            </article>
            <article className="stats__items">
                <h3 className="stats__name">29</h3>
                <h4 className="stats__description">Seconds</h4>
            </article>
        </section>
    )
}

export default Stats;