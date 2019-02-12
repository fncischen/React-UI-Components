import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import CalculatorDisplay from "../src/components/DisplayComponents/CalculatorDisplay";
import ActionButton from "../src/components/ButtonComponents/ActionButton";
import NumberButton from "../src/components/ButtonComponents/NumberButton";

const numbers = [1,2,3,4,5,6,7,8];

const element = (

    <div className="calculator">

        <div className="top">
            <CalculatorDisplay />
        </div>

        <div className="bottom">
            
            <div className ="left-side">
            
                <ActionButton text={$this.props.clearButton} />


                <ActionButton text={$this.props.zeroButton} />
            
            </div>

            <div className ="rigth-side">
            
            
            
            </div>

        </div>

    </div>
);


ReactDOM.render(element, document.getElementById('root'));
