import React from 'react';

function FunctionalProps(props) {
    const { name, salary, age } = props;
    return (
        <div className='mt-3'>
            <h4>(Function): Name: {name}, Age: {age}, Salary: {salary}</h4>
        </div>
    )
}

class ClassProps extends React.Component {
    render() {
        const { person, address} = this.props;
        return (
            <div>
                <h4>(Class): Person: {person}, Address: {address}</h4>
            </div>
        )
    }
}
export { FunctionalProps, ClassProps };

