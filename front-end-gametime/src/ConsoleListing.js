import React from 'react'
import Console from './Console'

const ConsoleListing = (props) => {

    const consoleDetails = props.consoles.map( (console) => {
        return <Console console={console} key={console.title}/>
    })

    return (
        <ul>
        {consoleDetails}
        </ul>
    )
}

export default ConsoleListing;