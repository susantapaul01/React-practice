import React from 'react';

class ClassComponent extends React.Component {
    render() {
        // console.log(this.props);
        const { friend, salary, age } = this.props
        return (
            <div>
                <h3>Name {friend}, Salary {salary}, Age {age}</h3>
            </div>
        )

    }
}

export default ClassComponent;