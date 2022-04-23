import React from "react";
import Header from "./components/Header";
import RandomWord from "./components/RandomWord";
import Start from "./components/Start";
import Timer from "./components/Timer";

export default function App(){
    return(
        <h1>
            < Header />
            < Timer/>
            < RandomWord />
        </h1>
    );
}