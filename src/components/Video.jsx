import React from "react";
import "../styles/video.css"

const Video = () => {

    return (
        <section className="video mt-20">
            <h2 className="title-section title-section--center">Latest videos</h2>
            <div className="video__list mt-20">
                <article className="card">
                    <i className="fa-regular fa-circle-play video__play"></i>
                    <img className="card__image" src="/assets/Join Us.png" alt="product 1" />
                    <h3 className="card__name">LOREM IPSUM</h3>
                </article>
                <article className="card">
                    <i className="fa-regular fa-circle-play video__play"></i>
                    <img className="card__image" src="/assets/Join Us.png" alt="product 1" />
                    <h3 className="card__name">LOREM IPSUM</h3>
                </article>
                <article className="card">
                    <i className="fa-regular fa-circle-play video__play"></i>
                    <img className="card__image" src="/assets/Join Us.png" alt="product 1" />
                    <h3 className="card__name">LOREM IPSUM</h3>
                </article>
                <article className="card">
                    <i className="fa-regular fa-circle-play video__play"></i>
                    <img className="card__image" src="/assets/Join Us.png" alt="product 1" />
                    <h3 className="card__name">LOREM IPSUM</h3>
                </article>
                <article className="card">
                    <i className="fa-regular fa-circle-play video__play"></i>
                    <img className="card__image" src="/assets/Join Us.png" alt="product 1" />
                    <h3 className="card__name">LOREM IPSUM</h3>
                </article>
                <article className="card">
                    <i className="fa-regular fa-circle-play video__play"></i>
                    <img className="card__image" src="/assets/Join Us.png" alt="product 1" />
                    <h3 className="card__name">LOREM IPSUM</h3>
                </article>
            </div>
            <button className="btn btn--primary mt-20">VIEW ALL</button>
        </section>
    )
}

export default Video;