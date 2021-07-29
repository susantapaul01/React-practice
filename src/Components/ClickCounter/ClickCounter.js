import React from 'react';
import WithCounter from './WithCounter';

function ClickCounter(props) {
    const { count, increaseEvent } = props;
    return (
        <button type='text' onClick={increaseEvent} >increase { count } </button>
    )
}

export default WithCounter(ClickCounter);