import React, { useState } from 'react';
const randomWords = require('random-words');


export default function Start(){

    const [start, setStart] = useState(false);
    const [startVisible, setStartVisible] = useState(true)
    const [stopVisible, setStopVisible] = useState(false)


    function handleStart(){
        setStart(!start);
        setStartVisible(!startVisible);
        setStopVisible(!stopVisible);
        document.getElementById('word').innerHTML = randomWords({exactly:1,wordsPerString:2,join:''});
    }
    if(startVisible == true && stopVisible == false){
        return(
            <button id="start" onClick={handleStart} className='btn btn-success'>
                Start Practice
            </button>
        )
    }
    else{
        console.log("no practice!")
        return(
            <button id="stop" onClick={handleStart} className='btn btn-danger'>
                Stop
            </button>
        )
    }
}