import React from 'react';

function FunctionalComponent(props) {
    const { name, salary, children } = props;
    return (
        <div>
            <h2>my name is {name} and Salary {salary}</h2>
            {children}
        </div>
    )
}

// const Welcome = (props) => {
//     return <h2>Name: {props.name} I am {props.age}</h2>
// } 

export default FunctionalComponent;