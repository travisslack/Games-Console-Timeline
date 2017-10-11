import React from 'react';

const ConsoleInformation = (props) => {

    if (!props.console) {
        return null; 
      }


    return (
        <li>
        <div className="information">
            <h1>{props.console.title}</h1>
            <h1>{props.console.description}</h1>
            <h1>{props.console.image}</h1>
        </div>
        </li>
    )
}

export default ConsoleInformation;