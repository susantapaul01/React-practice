import React from 'react'

export default function HoverCounter(props) {
    const { count, increaseCount } = props;
    return (
        <div>
            <h4>Count: {count}</h4>
            <button type='button' onClick={increaseCount}>Click</button>
        </div>
    )
}
