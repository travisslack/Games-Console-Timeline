import React from 'react';

const ConsoleInformation = (props) => {

    if(!console) {
        return null;
      }

    return (
        <li>
        <div className="description">
            <h1>{props.console.description}</h1>
        </div>
        </li>
    )
}

export default ConsoleInformation;