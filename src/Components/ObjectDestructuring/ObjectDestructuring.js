import React from 'react';
import ChildProps from './ChildProps';


function ObjectDestructuring() {

    const persons = [
        {
            id: 1,
            name: 'Susanta',
            age: 28,
            skill: 'react'
        },
        {
            id: 2,
            name: 'Roni',
            age: 28,
            skill: 'Vue js'
        },
        {
            id: 3,
            name: 'Sagor',
            age: 28,
            skill: 'php'
        },
        {
            id: 4,
            name: 'Ziaul',
            age: 28,
            skill: 'Angular'
        },
    ];
    const personList = persons.map(person => {
        return <ChildProps person={person} key={person.id} />
    })
    return (
        <>
            {personList}
        </>
    )
}

export default ObjectDestructuring;