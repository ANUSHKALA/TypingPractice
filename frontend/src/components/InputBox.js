import React, { useState } from 'react'
const random = require("random-words")

export default function InputBox(){
    const [changeWord,setChangeWord] = useState(false);
    const [seeStop,setSeeStop] = useState(false);
    const [starttime,setStarttime] = useState(false);

    let seconds;

    function checkKey(event){
        console.log("Pressed key is being checked...")
        console.log(event.key)
    }

    function strt (e){
        let seconds = 11;

        let interv;

        if(e.target.name === "start"){
            interv = setInterval(() => {
                seconds-=1;
                document.getElementById("timer").innerHTML=seconds
                if(seconds === 0 || starttime===false){
                    clearInterval(interv);
                }
                console.log(seconds);
            }, 1000);
        }


        else if(e.target.name === "stop"){
            setStarttime(true);
            if(starttime === true){
                setStarttime(false);
            }
        }


    }

    let word;
    function updateRandomWord(e){
        word = random();
        document.getElementById("randomword").innerHTML = word;
    }
    console.log(word)
    
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
                        <input id="inputbox" onKeyDown={checkKey} onChange={handleChange} name='typeHere' type="text" />
                        </div>
                        <div className="card-footer" onClick={() => {
                            setChangeWord(true);
                            setSeeStop(!seeStop);
                            }
                        }>
                            <div >
                                {seeStop?<button name="stop" className="btn btn-small btn-danger"
                                onClick={() => {
                                    document.getElementById("stop").value = " "
                                }} >Stop</button>:<button name='start' className="btn btn-small btn-success" onClick={strt} >Start Practice</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}