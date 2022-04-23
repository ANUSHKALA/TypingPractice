import React from "react";
import Header from "./components/Header";
import RandomWord from "./components/RandomWord";
import Start from "./components/Start";

export default function App(){
    return(
        <h1>
            {console.log("Hi")}
            < Header />
            < RandomWord />
        </h1>
    );
}