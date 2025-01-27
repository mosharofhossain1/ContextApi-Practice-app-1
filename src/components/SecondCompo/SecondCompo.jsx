// import React from 'react';

import { useContext } from "react";
import { AnotherContext } from "../../App";

const SecondCompo = () => {
    const [another, setAnother] = useContext(AnotherContext);
    return (
        <div>
            <button onClick={() => setAnother(another + 5)}>Second Compo - {another}</button>
        </div>
    );
};

export default SecondCompo;