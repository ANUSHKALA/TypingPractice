import React from 'react';

export default function Timer(props){

    let time = 90;

    function updateTime(){
        document.getElementById('timer').innerHTML = time;
        time--;
    }

    setInterval(updateTime,1000);

    //document.getElementById('timer').innerHTML = time;


    return(
        <h2 id="timer" className='my-3'>timer</h2>
    )
    
}