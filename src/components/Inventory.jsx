import React from "react";
import "../styles/inventory.css"

const Inventory = () => {

    return (
        <section className="inventory">
            <h2 className="title-section title-section--center">Lorem ipsum</h2>
            <div className="inventory__list mt-20">
                <article className="card">
                    <img className="card__image" src="/assets/Pic7.png" alt="product 1" />
                </article>
                <article className="card">
                    <img className="card__image" src="/assets/Pic8.png" alt="product 1" />
                </article>
                <article className="card">
                    <img className="card__image" src="/assets/Pic9.png" alt="product 1" />
                </article>
            </div>
            <button className="btn btn--white mt-20">VIEW ALL</button>
        </section>
    )
}

export default Inventory;