import React from 'react';

function ChildComponent(props) {
    return (
        <div className='mt-3'>
            <button className='btn btn-danger btn-sm rounded-0' onClick={() => props.greetHandeler()}>
                {props.isCondition ? 'Like' : 'Unlike'}
            </button>
        </div>
    )
}
export default ChildComponent;