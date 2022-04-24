import React from "react";
import Header from "./components/Header";
import Inputbox from "./components/Inputbox";
import RandomWord from "./components/RandomWord";
import Start from "./components/Start";
import Timer from "./components/Timer";

export default function App(){
    return(
        <h1>
            < Header />
            <div>
                < RandomWord />
                < Inputbox />
            </div>
        </h1>
    );
}