import React, {useState} from 'react';
import Start from './Start';
import Timer from './Timer';

export default function Header(){

    const [stop,setStop] = useState(false);

    function startStop(){
        let time = 10;
        const interv = setInterval(updateTime, 1000);
        document.getElementById('stop').addEventListener('click',setStop(true))

    
        function updateTime(){
            document.getElementById('timer').innerHTML = time;
            time--;
            if(time == 0 || stop==true){
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
                < Start change={startStop} stopTime={stop} setStopTime={setStop} />
            </div>
        </nav>
    )
}