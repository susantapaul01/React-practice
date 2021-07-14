import React from 'react';

const scaleName = {
    c: 'celcius',
    f: 'farhenheit'
}
function TemparatureInput(props) {
    const { temperature, scale, onTemparatureChange } = props;
    return (
        <div className='m-4'>
            <fieldset className='mb-2'>
                <legend>Enter Temparature in {scaleName[scale]}:</legend>
                <input type='text' value={temperature} onChange={(e) => onTemparatureChange(e, scale)} />
            </fieldset>
        </div>
    )

}

export default TemparatureInput;
