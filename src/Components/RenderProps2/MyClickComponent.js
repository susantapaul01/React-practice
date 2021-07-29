import React from 'react';

export default function MyClickComponent(props) {
    const { count, incrementHandler } = props;
    return (
        <div>
            <button type='button' onClick={incrementHandler}>increment { count }</button>
        </div>
    )
}


