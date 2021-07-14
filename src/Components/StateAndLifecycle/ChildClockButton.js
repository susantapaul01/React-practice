import React, { Component } from 'react'

class ChildClockButton extends Component {
    shouldComponentUpdate(nextprops) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextprops;
        if(currentChange === nextChange && currentLocale === nextLocale) {
            return false;
        } else {
            return true;
        }
    }
    render() {
        const { change, locale, show } = this.props;
        // if(!enable) return null;
        return (
            <div>
                <button type='button' onClick={() => change(locale)}>
                    {(locale === 'bn-BD') ? 'Bangla Clock' : 'English Clock'}
                </button>
                {show ? <h4>Translate to Bangla</h4> : <h4>Translate to English</h4> }
            </div>
        )
    }
}

export default ChildClockButton;
