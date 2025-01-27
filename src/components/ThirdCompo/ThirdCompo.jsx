// import React from 'react';

import { useContext } from "react";
import { CreateCountContext } from "../../App";


const ThirdCompo = () => {

    const useThridContext = useContext(CreateCountContext)
    return (
        <div>
            <button>Third compo - {useThridContext}</button>
        </div>
    );
};

export default ThirdCompo;