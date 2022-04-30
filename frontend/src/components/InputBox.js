import React, { useState } from 'react'

export default function InputBox(){
    const [timer,setTimer] = (useState(15));


    function startTime(){
        let interv = setInterval(() => 
        {
            setTimer(timer-1);
            document.getElementById('timer').innerHTML=timer;
        },1000);
    }


    return(
        <>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card ">
                        <div className="card-header">
                        <span id="timer" className="card-title">Timer</span>
                        </div>
                        <div className="card-content">
                        <h1 id="randomword">WORD</h1>
                        <br />
                        <input id="inputbox" type="text" />
                        </div>
                        <div className="card-footer">
                        <button className="btn btn-small btn-success" onClick={startTime}>Start Practice</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}