import React, { useState } from 'react'
const random = require("random-words")

export default function InputBox(){
    const [timer,setTimer] = useState(15);
    const [changeWord,setChangeWord] = useState(false);
    const [seeStop,setSeeStop] = useState(false);

    function updateRandomWord(e){
        let word = random();
        document.getElementById("randomword").innerHTML = word;
    }
    
    if(changeWord === true){
        updateRandomWord();
        setChangeWord(false);
    }

    function startTime(){
        document.getElementById('timer').innerHTML=timer;
        setInterval(
            function () {
                setTimer(timer-1);
                document.getElementById("timer").innerHTML = "You have " + timer + " doughnuts!";
       
            }, 1000);
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
                        <div className="card-footer" onClick={() => {
                            setChangeWord(true);
                            setSeeStop(!seeStop);
                            
                            }
                        }>
                            <div >
                                {seeStop?<button name="start" className="btn btn-small btn-danger" >Stop</button>:<button name='stop' className="btn btn-small btn-success" onClick={startTime}>Start Practice</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}