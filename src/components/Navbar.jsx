import React from "react"
import "../styles/navbar.css"

const Navbar = () => {

    return (
        <section className="hero">
            <nav className="navbar">
                <img className="navbar__icon" src="/assets/icongrab.png" alt="Logo Grab" />
                <div className="navbar__route">
                    <a href={void (0)} className="navbar__link">LOREM IPSUM</a>
                    <a href={void (0)} className="navbar__link">LOREM IPSUM</a>
                    <a href={void (0)} className="navbar__link">LOREM IPSUM</a>
                    <a href={void (0)} className="navbar__link">LOREM IPSUM</a>
                    <a href={void (0)} className="navbar__link">LOREM IPSUM</a>
                    <a href={void (0)} className="navbar__link">LOREM IPSUM</a>
                </div>

            </nav>
            <div className="hero__container">
                <div className="hero__content">
                    <h1 className="hero__title">LOREM IPSUM</h1>
                    <h2 className="hero__title hero__title--white typewriter">LOREM IPSUM DOLOR</h2>
                    <h2 className="hero__title">LOREM IPSUM</h2>
                    <button className="btn btn--primary mt-20">WHAT IS NEXT</button>
                </div>

            </div>
        </section>
    )
}

export default Navbar;