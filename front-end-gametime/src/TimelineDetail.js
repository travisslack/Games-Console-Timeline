import React from 'react';

const TimelineDetail = (props) => {

return(
    <li>
    <div className="timeline">
        <h1>{props.console.title}</h1>
        <h1>{props.console.released}</h1>
    </div>
    </li>
)

}

export default TimelineDetail;