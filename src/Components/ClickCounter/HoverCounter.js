import React from 'react';
import WithCounter from './WithCounter';

function HoverCounter(props) {
    const { count2, increaseEvent } = props;
    return (
        <div className='mt-3'>
            <button onClick={increaseEvent}>increase Even Number</button>
            <p>Numbers: { count2 }</p>
        </div>
    )
}

export default WithCounter(HoverCounter);