import React from 'react'
import './App.css'

import CalculatorButton from '../component/CalculatorButton'

export default props => (
    <div className="app">
        <div className="calculator">
            <CalculatorButton buttonRole="display" label={"Display"}
                onclick={ () => console.log('pressed!') } />

            <CalculatorButton buttonRole="ziro" label="0" 
                onclick={ () => console.log('pressed!') } />
            <CalculatorButton buttonRole="one" label="1" 
                onclick={ () => console.log('pressed!') } />
            <CalculatorButton buttonRole="two" label="2" 
                onclick={ () => console.log('pressed!') } />
            <CalculatorButton buttonRole="three" label="3" 
                onclick={ () => console.log('pressed!') } />
            <CalculatorButton buttonRole="four" label="4" 
                onclick={ () => console.log('pressed!') } />
            <CalculatorButton buttonRole="five" label="5" 
                onclick={ () => console.log('pressed!') } />
            <CalculatorButton buttonRole="six" label="6" 
                onclick={ () => console.log('pressed!') } />
            <CalculatorButton buttonRole="seven" label="7" 
                onclick={ () => console.log('pressed!') } />
            <CalculatorButton buttonRole="eight" label="8" 
                onclick={ () => console.log('pressed!') } />
            <CalculatorButton buttonRole="nine" label="9" 
                onclick={ () => console.log('pressed!') } />

            <CalculatorButton buttonRole="addition" label="+" 
                onclick={ () => console.log('pressed!') } />
            <CalculatorButton buttonRole="subtraction" label="-" 
                onclick={ () => console.log('pressed!') } />
            <CalculatorButton buttonRole="multiplication" label="*" 
                onclick={ () => console.log('pressed!') } />
            <CalculatorButton buttonRole="division" label="/" 
                onclick={ () => console.log('pressed!') } />
            <CalculatorButton buttonRole="equal" label="=" 
                onclick={ () => console.log('pressed!') } />

            <CalculatorButton buttonRole="ac" label="AC" 
                onclick={ () => console.log('pressed!') } />
            <CalculatorButton buttonRole="sign" label="+/-" 
                onclick={ () => console.log('pressed!') } />
            <CalculatorButton buttonRole="percent" label="%" 
                onclick={ () => console.log('pressed!') } />
            <CalculatorButton buttonRole="decpoint" label="." 
                onclick={ () => console.log('pressed!') } />
        </div>
    </div>
)