import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './App.css'
import CalculatorButton from '../component/CalculatorButton'
import CalculatorActions from '../store/actions/calculatorActionCreators'

const Calculator = props => {
    const log = [
        props.displayValue, props.operations, props.operands, props.waitNextNumber
    ]

    useEffect(() => {
        props.clearDisplay()
    }, []) // [] = componentWillMount

    const [isWait, changeIsWait] = useState(false)
    useEffect(() => {
        props.waitNextNumber ? changeIsWait(true) : ''

        if(isWait === true && props.waitNextNumber === false) {
            changeIsWait(false)
            props.toNextNumber()
        }
    }, [props.waitNextNumber])

    return (
        <div className="app">
            <div className="calculator">
                <CalculatorButton buttonRole="display" label={ props.displayValue }
                    onclick={ () => console.log('') } />

                <CalculatorButton buttonRole="ziro"  label="0" 
                    onclick={ () => props.addDecimal(props.displayValue, 0) } />
                <CalculatorButton buttonRole="one"   label="1" 
                    onclick={ () => props.addDecimal(props.displayValue, 1) } />
                <CalculatorButton buttonRole="two"   label="2" 
                    onclick={ () => props.addDecimal(props.displayValue, 2) } />
                <CalculatorButton buttonRole="three" label="3" 
                    onclick={ () => props.addDecimal(props.displayValue, 3) } />
                <CalculatorButton buttonRole="four"  label="4" 
                    onclick={ () => props.addDecimal(props.displayValue, 4) } />
                <CalculatorButton buttonRole="five"  label="5" 
                    onclick={ () => props.addDecimal(props.displayValue, 5) } />
                <CalculatorButton buttonRole="six"   label="6" 
                    onclick={ () => props.addDecimal(props.displayValue, 6) } />
                <CalculatorButton buttonRole="seven" label="7" 
                    onclick={ () => props.addDecimal(props.displayValue, 7) } />
                <CalculatorButton buttonRole="eight" label="8" 
                    onclick={ () => props.addDecimal(props.displayValue, 8) } />
                <CalculatorButton buttonRole="nine"  label="9" 
                    onclick={ () => props.addDecimal(props.displayValue, 9) } />

                <CalculatorButton buttonRole="decpoint" label="." 
                    onclick={ () => props.addDecimalPoint(props.displayValue) } />

                <CalculatorButton buttonRole="addition" label="+" 
                    onclick={ () => props.waitNextNumber === false ? 
                        props.updateFormula(props.operations, '+', props.operands, props.displayValue) : '' } />
                <CalculatorButton buttonRole="subtraction" label="-" 
                    onclick={ () => props.waitNextNumber === false ? 
                        props.updateFormula(props.operations, '-', props.operands, props.displayValue) : '' } />
                <CalculatorButton buttonRole="multiplication" label="*" 
                    onclick={ () => props.waitNextNumber === false ? 
                        props.updateFormula(props.operations, '*', props.operands, props.displayValue) : '' } />
                <CalculatorButton buttonRole="division" label="/" 
                    onclick={ () => props.waitNextNumber === false ? 
                        props.updateFormula(props.operations, '/', props.operands, props.displayValue) : '' } />
                <CalculatorButton buttonRole="equal" label="=" 
                    onclick={ () => console.log(log) } />

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

const mapStateToProps = state => ({ ...state.calculator })
const mapDispatchToProps = dispatch => bindActionCreators(CalculatorActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)