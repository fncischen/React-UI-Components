import React from 'react';
import './Button.css';

class NumberButton extends React.Component {
    render(){

        return(
            <button className="number-button" style={{}}>{this.props.text}</button>
        );

    }

}


export default NumberButton;