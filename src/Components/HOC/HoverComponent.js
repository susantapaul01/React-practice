import React from 'react';
import WithComponent from './WithComponent';

const HoverComponent = (props) => {
    const { count, incrementHandeler } = props;
    return (
        <div>
            <h4 onClick={incrementHandeler}>Increase Number { count }</h4>
        </div>
    )
}
export default WithComponent(HoverComponent);