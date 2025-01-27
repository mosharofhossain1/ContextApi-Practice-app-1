
// import React from 'react';

import { useContext } from "react";
import { CreateCountContext } from "../../App";


const FirstCompo = () => {

    const [count, setCount] = useContext(CreateCountContext)
    return (
        <div>

            <button onClick={() => setCount(count + 2)}>First Compo - {count}</button>
        </div>
    );
};

export default FirstCompo;