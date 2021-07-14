import React, { Component } from 'react';
import ChildClockButton from './ChildClockButton';

class Clock extends Component {
    state = {
        date: new Date(),
        locale: 'en-US'
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handelerEvent = (locale) => {
        this.setState({
            locale: locale
        })
    }

    tick = () => {
        this.setState({
            date: new Date()
        });
    }

    render() {
        const { date, locale } = this.state;
        // let button;
        // if(locale === 'bn-BD') {
        //     button = (<ChildClockButton change={this.handelerEvent} locale='en-US' />);
        // } else {
        //     button = (<ChildClockButton change={this.handelerEvent} locale='bn-BD' />);
        // }
        return (
            <div className='m-3'>
                <h4>{date.toLocaleTimeString(locale)}</h4>
                {
                    (locale === 'en-US') ? <ChildClockButton change={this.handelerEvent} locale='bn-BD' show /> : <ChildClockButton change={this.handelerEvent} locale='en-US' show={false} /> 
                }
            </div>
        );
    }
}

export default Clock;

// ~~~~~ All onClick are same ~~~~~~
// onClick={this.handelerEvent.bind(this)}
// onClick={this.handelerEvent}
// onClick={() => this.handelerEvent()}