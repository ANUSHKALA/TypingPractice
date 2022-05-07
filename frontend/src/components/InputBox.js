import React, { useState } from 'react'
const random = require("random-words")

export default function InputBox(){
    const [changeWord,setChangeWord] = useState(false);
    const [seeStop,setSeeStop] = useState(false);

    let seconds;

    function strt (e){
        let seconds = 10;
        

        if(e.target.name === "start"){
            let interv = setInterval(() => {
                seconds-=1;
                document.getElementById("timer").innerHTML=seconds
                if(seconds === 0){
                    clearInterval(interv);
    
                }
                console.log(seconds);
            }, 1000);
        }

        else if(e.target.name === "stop"){
            const stopTimer = function(){
                clearInterval(seconds===0)
            }
        }


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
                        <span id="timer" className="card-title">{seconds}</span>
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
                                {seeStop?<button name="start" className="btn btn-small btn-danger" onClick={strt} >Stop</button>:<button name='stop' className="btn btn-small btn-success" onClick={strt} >Start Practice</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}