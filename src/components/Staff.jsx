import React from "react";
import "../styles/staff.css"

const Staff = () => {

    return (
        <section className="staff mt-20">
            <div className="staff__content pt-20">
                <h2 className="title-section">Lorem ipsum dolor sit amet, consetetur</h2>
                <div className="staff__actions">
                    <button className="btn btn--white btn--staff w-full">LOREM IPSUM DOLOR SIT</button>
                    <button className="btn btn--outline btn--staff w-full">LOREM IPSUM DOLOR SIT AMET</button>
                </div>
            </div>
            <div className="staff__picture">
                <img src="/assets/Pic5.png" alt="pic5" className="staff__image" />
            </div>
        </section>
    )
}

export default Staff;