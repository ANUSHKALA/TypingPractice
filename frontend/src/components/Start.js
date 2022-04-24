import React, { useState } from 'react';
const randomWords = require('random-words');


export default function Start(props){

    const [start, setStart] = useState(false);
    const [startVisible, setStartVisible] = useState(true);
    const [stopVisible, setStopVisible] = useState(false);
    let interv = null;


    function handleStart(){
        setStart(!start);
        setStartVisible(!startVisible);
        setStopVisible(!stopVisible);
        document.getElementById('word').innerHTML = randomWords({exactly:1,wordsPerString:2,join:''});
    }
    if(startVisible == true && stopVisible == false){
        return(
            <button
            id="start"
            onClick={() => [
                handleStart(),
                props.change()
            ]}
            className='btn btn-success'>
                Start Practice
            </button>
        )
    }
    else{
        console.log("no practice!")
        return(
            <button
            id="stop"
            onClick={() => [
                clearInterval(interv)
            ]}
            className='btn btn-danger'>
                Stop
            </button>
        )
    }
}