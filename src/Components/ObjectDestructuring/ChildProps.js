import React from 'react';

function ChildProps({person}) {
    console.log(person)
    const { name, skill, age } = person;
    return (
        <div>
            <h4>Person Name: {name}, Skill: {skill}, Age: {age}</h4>
        </div>
    )
}

export default ChildProps;