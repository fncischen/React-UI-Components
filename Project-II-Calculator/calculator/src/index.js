import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import CalculatorDisplay from "../src/components/DisplayComponents/CalculatorDisplay";
import ActionButton from "../src/components/ButtonComponents/ActionButton";
import NumberButton from "../src/components/ButtonComponents/NumberButton";
import CalculatorButtons from "../src/components/ButtonComponents/CalculatorButtons";

class Calculator extends React.Component {

    render() {
        return(

            <div className="calculator">

                <div className="top">

                     <CalculatorDisplay inputText={$this.props.calculator.inputText} />

                </div>

                <div className="bottom">
            
                    <div className ="left-side">
            
                        <ActionButton text={$this.props.calculator.clearButton} />

                        <CalculatorButtons buttons={$this.props.calculator.buttons} />

                        <ActionButton text={$this.props.calculator.zeroButton} />
            
                     </div>

                    <div className ="rigth-side">
            
            
            
                    </div>

                </div>

            </div>

        );
    }
};


const calculator_data = {
    numbers: [1,2,3,4,5,6,7,8],
    clearButton: "clear",
    zeroButton: 0,
    operations: ["÷","×","+","-"],
}

ReactDOM.render(<Calculator calculator={calculator_data}/>, document.getElementById('root'));
