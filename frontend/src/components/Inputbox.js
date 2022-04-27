import React from 'react';

export default function Inputbox(props){

    return(
        <input id='input' type="text" onChange={props.onType} />
    )

}