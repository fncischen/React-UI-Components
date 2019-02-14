import React from 'react';
import './Button.css';
import NumberButton from "./NumberButton";

class OperationsButtons extends React.Component {
    
    render() {

        const buttons = [];
        const style = this.props.style;

        this.props.buttons.forEach(button_operation =>
            buttons.push(
                <NumberButton text={button_operation} style={style} />
            )
        );

        return (
            buttons
        );
    }

}

export default OperationsButtons;