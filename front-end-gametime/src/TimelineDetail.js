import React from 'react';

const TimelineDetail = (props) => {



   const onHandleClick = () => {
    //    console.log("hello")
       props.changeConsole(props.console)
   }

return(
    <li onClick={onHandleClick} >
    <div className="timeline">
        <h1>{props.console.title}</h1>
        <h1>{props.console.released}</h1>
    </div>
    </li>
)

}

export default TimelineDetail;