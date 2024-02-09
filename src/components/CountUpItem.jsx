import React from "react";
import CountUp from 'react-countup';

const CountUpItem = ({ end, duration, label, counterOn }) => {
    return (
      <>
        {counterOn && (
          <CountUp start={0} end={end} duration={duration}>
            {({ countUpRef }) => (
              <h3 className="stats__name" ref={countUpRef}></h3>
            )}
          </CountUp>
        )}
        <h4 className="stats__description">{label}</h4>
      </>
    );
  };

  export default CountUpItem;