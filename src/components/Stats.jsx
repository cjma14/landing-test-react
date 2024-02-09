import React, { useState } from "react";
import "../styles/stats.css"
import ScrollTrigger from "react-scroll-trigger";
import CountUpItem from "./CountUpItem";

const Stats = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <section className="stats">
                <h2 className="stats__title">Lorem ipsum dolor sit amet, consetetur</h2>
                <article className="stats__items">
                    <CountUpItem
                        label="days"
                        end={170}
                        duration={2}
                        counterOn={counterOn} />
                </article>
                <article className="stats__items">
                    <CountUpItem
                        label="hours"
                        end={13}
                        duration={2}
                        counterOn={counterOn} />
                </article>
                <article className="stats__items">

                    <CountUpItem
                        label="minutes"
                        end={39}
                        duration={2}
                        counterOn={counterOn} />

                </article>
                <article className="stats__items">
                    <CountUpItem
                        label="Seconds"
                        end={29}
                        duration={2}
                        counterOn={counterOn} />
                </article>
            </section>
        </ScrollTrigger>
    )
}

export default Stats;