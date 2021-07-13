import React, { Component } from 'react';
import ChildClock from './ChildClock';

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            locale: 'bn-BD'
        }
        // this.handerClick = this.handerClick.bind(this);
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    handelerClick = () => {
        this.setState({
            locale: 'en-US'
        })
        // console.log('the buttn is clicked');
    }
    
    render() {
        console.log('Clock Component Rendering');
        const { date, locale } = this.state;
        return (
            <div className='text-center mt-2'>
                <ChildClock date={date} locale={locale} change={this.handelerClick} />

                {/* <h3>{date.toLocaleTimeString(locale)}</h3>
                <button type='button' onClick={this.handerClick}>Click</button> */}
            </div>
        )
    }
}

export default Clock;
