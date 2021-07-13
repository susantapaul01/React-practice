import React from 'react';

class ChildClock extends React.Component {
    // ~~~~ Re-render controling
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;
        if(currentChange === nextChange && currentLocale === nextLocale) {
            return false;
        } else {
            return true;
        }
    }
    render() {
        console.log('Button Component Rendering');
        const { date, change, locale} = this.props;
        return (
            <>
                <h3>{date.toLocaleTimeString(locale)}</h3>
                <button type='button' onClick={change}>Click</button>
            </>
    )
    }
} 
export default ChildClock;