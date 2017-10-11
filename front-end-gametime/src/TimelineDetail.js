import React from 'react';

const TimelineDetail = (props) => {

return(
    <section>
    <ol>
    <ul>
    <div className="detail">
        <li>{props.console.title}</li>
        <li>{props.console.released}</li>
        <div className="arrows">
    <button className="arrow arrow__prev disabled" disabled>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_prev.svg" alt="prev timeline arrow"/>
    </button>
    <button className="arrow arrow__next">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_next.svg" alt="next timeline arrow"/>
    </button>
  </div>
    </div>
    </ul>
  </ol>
  </section>
    
)

}

export default TimelineDetail;