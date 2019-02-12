import React from 'react';
import './Button.css';

class ActionButton extends React.Component {
    
    render() {
        const style = this.props.style;
        return (
            <button className="actionButton" style={style}>{this.props.text}</button>
        );
    }
}

export default ActionButton;