import React from 'react';
import Start from './Start';

export default function Header(){
    return(
        <nav className="navbar navbar-light bg-secondary">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1" >Typing Practice</span>
                < Start />
            </div>
        </nav>
    )
}