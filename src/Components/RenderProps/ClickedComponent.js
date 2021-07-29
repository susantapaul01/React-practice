import React from 'react';

export default function ClickedComponent(props) {
    const { message, changeMessage } = props;
    return (
        <div>
            <h5>{ message }</h5>
            <button type='button' onClick={changeMessage}>Click</button>
        </div>
    )
}
