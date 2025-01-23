// import React from 'react';

import { useContext } from "react";
import { CounterContext } from "../../App";


const ThirdCompo = () => {
    const useCounter = useContext(CounterContext)
    return (
        <div>
            <h1>Third Compo - {useCounter}</h1>
        </div>
    );
};

export default ThirdCompo;