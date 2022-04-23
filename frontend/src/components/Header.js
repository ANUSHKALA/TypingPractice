import React from 'react';
import Start from './Start';

export default function Header(){
    return(
        <nav class="navbar navbar-light bg-secondary">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1" >Typing Practice</span>
                < Start />
            </div>
        </nav>
    )
}