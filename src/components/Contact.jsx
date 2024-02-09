import React from "react";
import "../styles/contact.css"
import FormInput from "./form-elements/FormInput";
import FormTextArea from "./form-elements/TextArea";

const Contact = () => {
    return (
        <section className="contact mt-20">
            <div></div>
            <div className="contact__content">
                <h2 className="title-section">JOIN US.</h2>
                <h3 className="contact__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</h3>
                <form>
                    <div className="contact__form">
                        <div>
                            <FormInput labelName="Name"/>
                        </div>

                        <div>
                            <FormInput labelName="Surname"/>
                        </div>

                        <div>
                            <FormInput labelName="Phone"/>
                        </div>

                        <div>
                            <FormInput labelName="Email"/>
                        </div>

                    </div>

                    <div className="contact__form-full">
                        <div>
                            <FormInput labelName="Department"/>
                        </div>

                        <div>
                            <FormTextArea labelName="Message"/>
                        </div>
                    </div>

                </form>
                <button className="btn btn--primary">I’M IN</button>
                <p className="contact__condition">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
            </div>
        </section>
    )
}

export default Contact;