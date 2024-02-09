import React from "react";
import "../styles/product.css"

const Product = () => {

    return (
        <section className="product pt-20">
            <h2 className="title-section title-section--center">Lorem ipsum</h2>
            <p className="product__descripction">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua.
            </p>

            <div className="product__list mt-20">
                <article className="card">
                    <img className="card__image" src="/assets/Pic2.png" alt="product 1" />
                    <h3 className="card__name">LOREM IPSUM</h3>
                </article>
                <article className="card">
                    <img className="card__image" src="/assets/Pic3.png" alt="product 1" />
                    <h3 className="card__name">LOREM IPSUM</h3>
                </article>
                <article className="card">
                    <img className="card__image" src="/assets/Pic4.png" alt="product 1" />
                    <h3 className="card__name">LOREM IPSUM</h3>
                </article>
            </div>
            <button className="btn btn--outline mt-20">LEARN MORE</button>
        </section>
    )
}

export default Product;