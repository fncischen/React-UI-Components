import React from 'react';
import './Button.css';
import NumberButton from "./NumberButton";

class CalculatorButtons extends React.Component {
    
    render() {
        const buttons = [];
        const style = this.props.style;

        console.log(this.props.buttons);

        this.props.buttons.forEach((buttonText) =>
            buttons.push(
                <NumberButton text={buttonText} style={style} />
            )
        );

        return(
            {buttons}
        )
    }
}
export default CalculatorButtons;