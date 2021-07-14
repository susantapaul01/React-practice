import React, { Component } from 'react';
import TemparatureInput from './TemparatureInput';
import BoilingVerdict from './BoilingVerdict';
import { convert, toCelsius, toFahrenheit } from './Converter';

class Calulator extends Component {
    state = {
        temperature: '',
        scale: 'c'
    }

    handelChange = (event, scale) => {
        this.setState({
            temperature: event.target.value,
            scale,
        })
    }
    render() {
        const { temperature, scale } = this.state;
        const celcius = (scale === 'f') ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = (scale === 'c') ? convert(temperature, toFahrenheit) : temperature;
        return (
            <div className='m-4'>
                <TemparatureInput scale='c' temperature={celcius} onTemparatureChange={this.handelChange} />
                <TemparatureInput scale='f' temperature={fahrenheit} onTemparatureChange={this.handelChange}  />
                <BoilingVerdict celcius={parseFloat(temperature)} />
            </div>
        )
    }
}

export default Calulator;
