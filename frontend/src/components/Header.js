import React, {useState, useEffect} from 'react';
import Start from './Start';
import Timer from './Timer';

export default function Header(){

    

    return(
        <nav className="navbar navbar-light bg-secondary">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1" >Typing Practice</span>

            </div>
        </nav>
    )
}