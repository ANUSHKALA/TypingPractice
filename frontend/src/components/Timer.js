import React from 'react';

export default function Timer(props){

    let time = 10;

    function updateTime(){
        document.getElementById('timer').innerHTML = time;
        time--;

        if(time == 0){
            clearInterval();
            document.getElementById('timer').innerHTML = "Time Over!!!";
        }
    }

    var interv = setInterval(() => {
        document.getElementById('timer').innerHTML = time;
        time--;
        if(time == 0){
            clearInterval(interv);
            document.getElementById('timer').innerHTML = "Time Over!!!";
        }}, 1000);

    //document.getElementById('timer').innerHTML = time;


    return(
        <h2 id="timer" className='my-3'>timer</h2>
    )
    
}