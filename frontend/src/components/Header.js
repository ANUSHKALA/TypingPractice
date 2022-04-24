import React from 'react';
import Start from './Start';
import Timer from './Timer';

export default function Header(){


    function startStop(){
        let time = 10;
        const interv = setInterval(updateTime, 1000);
    
        function updateTime(){
            document.getElementById('timer').innerHTML = time;
            time--;
            if(time == 0){
                clearInterval(interv);
                document.getElementById('timer').innerHTML = "Time Over!!!";
            }
        }
    
    }



    return(
        <nav className="navbar navbar-light bg-secondary">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1" >Typing Practice</span>
                < Timer />
                < Start change={startStop} />
            </div>
        </nav>
    )
}