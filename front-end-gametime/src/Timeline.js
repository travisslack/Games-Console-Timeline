import React from 'react';
import TimelineDetail from './TimelineDetail';
// import InformationDetail from './InformationDetail';

const Timeline = (props) => {
    
  if (props.consoles.length === 0) {
    return null; 
  }

  const consoleNodes = props.consoles.map( (console) => {
    return <TimelineDetail console={console} key={console.released}  />
})

  return (
    
    <section className="timeline">
    <ol>
        { consoleNodes } 
    </ol>
    </section>
  )
}

export default Timeline;