import React, { useState } from 'react'
const random = require("random-words")

export default function InputBox(){
    const [changeWord,setChangeWord] = useState(false);
    const [seeStop,setSeeStop] = useState(false);

    const [seconds, setSeconds] = useState(0)

    const startTimer = () => {
            setInterval(() => {
                document.querySelector("#timer").innerHTML = seconds;
                setSeconds(seconds++)
                console.log(seconds)
            }, 1000)
    }

    const stopTimer = () => {
        clearInterval(setSeconds(0))
    }

    function updateRandomWord(e){
        let word = random();
        document.getElementById("randomword").innerHTML = word;
    }
    
    if(changeWord === true){
        updateRandomWord();
        setChangeWord(false);
    }


    function handleChange(e){
        console.log(e.target.value);
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
                        <input id="inputbox" onChange={handleChange} name='typeHere' type="text" />
                        </div>
                        <div className="card-footer" onClick={() => {
                            setChangeWord(true);
                            setSeeStop(!seeStop);
                            
                            }
                        }>
                            <div >
                                {seeStop?<button name="start" className="btn btn-small btn-danger" onClick={stopTimer} >Stop</button>:<button name='stop' className="btn btn-small btn-success" onClick={startTimer}>Start Practice</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}