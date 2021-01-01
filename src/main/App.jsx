import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './App.css'
import CalculatorButton from '../component/CalculatorButton'
import CalculatorActions from '../store/actions/calculatorActionCreators'

const Calculator = props => {

    return (
        <div className="app">
            <div className="calculator">
                <CalculatorButton buttonRole="display" label={ props.calculator.displayValue }
                    onclick={ () => console.log('') } />

                <CalculatorButton buttonRole="ziro"  label="0" 
                    onclick={ () => props.addDecimal(props.calculator.displayValue, 0) } />
                <CalculatorButton buttonRole="one"   label="1" 
                    onclick={ () => props.addDecimal(props.calculator.displayValue, 1) } />
                <CalculatorButton buttonRole="two"   label="2" 
                    onclick={ () => props.addDecimal(props.calculator.displayValue, 2) } />
                <CalculatorButton buttonRole="three" label="3" 
                    onclick={ () => props.addDecimal(props.calculator.displayValue, 3) } />
                <CalculatorButton buttonRole="four"  label="4" 
                    onclick={ () => props.addDecimal(props.calculator.displayValue, 4) } />
                <CalculatorButton buttonRole="five"  label="5" 
                    onclick={ () => props.addDecimal(props.calculator.displayValue, 5) } />
                <CalculatorButton buttonRole="six"   label="6" 
                    onclick={ () => props.addDecimal(props.calculator.displayValue, 6) } />
                <CalculatorButton buttonRole="seven" label="7" 
                    onclick={ () => props.addDecimal(props.calculator.displayValue, 7) } />
                <CalculatorButton buttonRole="eight" label="8" 
                    onclick={ () => props.addDecimal(props.calculator.displayValue, 8) } />
                <CalculatorButton buttonRole="nine"  label="9" 
                    onclick={ () => props.addDecimal(props.calculator.displayValue, 9) } />

                <CalculatorButton buttonRole="decpoint" label="." 
                    onclick={ () => props.addDecimalPoint(props.calculator.displayValue) } />

                <CalculatorButton buttonRole="addition" label="+" 
                    onclick={ () => props.addOperation(
                        props.calculator.displayValue, props.calculator.operations, '+') } />
                <CalculatorButton buttonRole="subtraction" label="-" 
                    onclick={ () => props.addOperation(
                        props.calculator.displayValue, props.calculator.operations, '-') } />
                <CalculatorButton buttonRole="multiplication" label="*" 
                    onclick={ () => props.addOperation(
                        props.calculator.displayValue, props.calculator.operations, '*') } />
                <CalculatorButton buttonRole="division" label="/" 
                    onclick={ () => props.addOperation(
                        props.calculator.displayValue, props.calculator.operations, '/') } />
                <CalculatorButton buttonRole="equal" label="=" 
                    onclick={ () => console.log(props.calculator) } />

                <CalculatorButton buttonRole="ac" label="AC" 
                    onclick={ () => props.clearDisplay() } />
                <CalculatorButton buttonRole="sign" label="+/-" 
                    onclick={ () => console.log('pressed!') } />
                <CalculatorButton buttonRole="percent" label="%" 
                    onclick={ () => console.log('pressed!') } />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ calculator: state.calculator })
const mapDispatchToProps = dispatch => bindActionCreators(CalculatorActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)