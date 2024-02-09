import React, { useState } from "react";
import CountUp from 'react-countup';

const CountUpItem = ({ end, duration, label, counterOn }) => {
    return (
      <>
        {counterOn && <CountUp  className="stats__name" start={0} end={end} duration={duration}/>}
        <h4 className="stats__description">{label}</h4>
      </>
    );
  };

  export default CountUpItem;