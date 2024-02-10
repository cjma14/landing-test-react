import React from "react";
import "../styles/inventory.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Inventory = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


return (
    <section className="inventory">
        <h2 className="title-section title-section--center">Lorem ipsum</h2>

        <div>
            <Carousel 
                responsive={responsive}
                showDots={true} 
                className="mt-20">
                <article className="card">
                    <img className="card__image" src="/assets/Pic7.png" alt="product 1" />
                </article>
                <article className="card">
                    <img className="card__image" src="/assets/Pic8.png" alt="product 1" />
                </article>
                <article className="card">
                    <img className="card__image" src="/assets/Pic9.png" alt="product 1" />
                </article>
                <article className="card">
                    <img className="card__image" src="/assets/Pic7.png" alt="product 1" />
                </article>
                <article className="card">
                    <img className="card__image" src="/assets/Pic8.png" alt="product 1" />
                </article>
                <article className="card">
                    <img className="card__image" src="/assets/Pic9.png" alt="product 1" />
                </article>
            </Carousel>
        </div>
        
        <button className="btn btn--white mt-20">VIEW ALL</button>
    </section>
)
}

export default Inventory;