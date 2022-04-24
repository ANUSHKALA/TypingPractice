import React, { useState } from 'react';
const randomWords = require('random-words');


export default function Start(props){

    const [start, setStart] = useState(false);
    const [startVisible, setStartVisible] = useState(true);
    const [stopVisible, setStopVisible] = useState(false);
    let interv = null;

    function back(){
        document.get = "TIMER";
    }


    function handleStart(){
        setStart(!start);
        setStartVisible(!startVisible);
        setStopVisible(!stopVisible);
        document.getElementById('word').innerHTML = randomWords({exactly:1,wordsPerString:2,join:''});
        console.log(document.getElementById('word').innerHTML);
    }
    if(startVisible == true && stopVisible == false){
        return(
            <button
            name='start'
            id="start"
            onClick={() => [
                handleStart(),
                props.change(),
            ]}
            className='btn btn-success'>
                Start Practice
            </button>
        )
    }
    else{
        return(
            <button
            name='stop'
            id="stop"
            onClick={() => [
                props.setStopTime(true),
                console.log(props.stopTime),
                clearInterval(interv),
                setStartVisible(!startVisible),
                setStopVisible(!stopVisible),
            ]}
            className='btn btn-danger'>
                Stop
            </button>
        )
    }
}