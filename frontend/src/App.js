import React from "react";
import Header from "./components/Header";
import Inputbox from "./components/Inputbox";
import RandomWord from "./components/RandomWord";
import Start from "./components/Start";
import Timer from "./components/Timer";

export default function App(){


    function handleChange(e){
        const {name,value} = e.target;
        console.log(value)
    }


    return(
        <h1>
            < Header />
            <div className="parent">
                < RandomWord />
                < Inputbox onType={handleChange} />
            </div>
        </h1>
    );
}