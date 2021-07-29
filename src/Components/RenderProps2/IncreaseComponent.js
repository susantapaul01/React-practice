import React from 'react';

function TextComponent(props) {
    const { count, incrementHandler } = props;
    return (
        <h4 onClick={incrementHandler}>Text {count}</h4>
    )
}
export default TextComponent;