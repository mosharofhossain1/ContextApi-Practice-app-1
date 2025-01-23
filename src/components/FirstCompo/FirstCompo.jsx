// import React from 'react';

import { useContext } from "react";
import { CounterContext } from "../../App";

const FirstCompo = () => {

    const counteState = useContext(CounterContext)
    return (
        <div>
            <h1>First Compo - {counteState}</h1>
        </div>
    );
};

export default FirstCompo;