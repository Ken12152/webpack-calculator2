import React from 'react'
import './CalculatorButton.css'

export default props => {
    return (
        <div className={ `calculator-button ${props.buttonRole}` }>
            <button type="button" onClick={ props.onclick }>
                { props.label }
            </button>
        </div>
    )
}