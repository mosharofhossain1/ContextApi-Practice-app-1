// import React from 'react';

import { useContext, useState } from "react";
import { SecondContext } from "../../App";

const SecondCompo = () => {
    const [second, setSecond] = useState(10);
    const secondCounter = useContext(SecondContext)

    return (
        <div>
            <h1>Second Compo -{secondCounter}</h1>
            <button onClick={() => setSecond(second + 1)}>Second Counter </button>
        </div>
    );
};

export default SecondCompo;