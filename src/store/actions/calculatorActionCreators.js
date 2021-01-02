export function addDecimal(displayNumber, number) {
    let newDisplayNumber = ''

    if(displayNumber === '0') {
        switch(number) {
            case 0:
                newDisplayNumber = '0'
            default:
                newDisplayNumber = number.toString()
        }
    } else {
        newDisplayNumber = displayNumber + number
    }

    return [{
        type: 'calculator/addDecimal',
        payload: newDisplayNumber
    }, changeWaitingStatus(false)]
}

export function addDecimalPoint(displayNumber) {
    const newDisplayNumber = 
        displayNumber.indexOf('.') === -1 ? displayNumber + '.' : displayNumber

    return {
        type: 'calculator/addDecimal',
        payload: newDisplayNumber
    }
}

export function clearDisplay() {
    return [
        { type: 'calculator/clearDisplay' },
        changeWaitingStatus(false)
    ]
}

export function addOperation(operations, addOperation) {
    const newOperations = [].concat(operations, addOperation)

    return {
        type: 'calculator/addOperation',
        payload: newOperations 
    }
}

export function addOperand(operands, displayNumber) {
    const newOperands = [].concat(operands, parseFloat(displayNumber))

    return {
        type: 'calculator/addOperand',
        payload: newOperands
    }
}

export function updateFormula(operations, operation, operands, displayNumber) {
    return [
        addOperation(operations, operation),
        addOperand(operands, displayNumber),
        changeWaitingStatus(true)
    ]
}

export function changeWaitingStatus(status) {
    return {
        type: 'calculator/changeWaitingStatus',
        payload: status
    }
}

export function resetAC() {
    return [
        clearDisplay(),
        changeWaitingStatus(false)
    ]
}

export function toNextNumber() {
    return [
        clearDisplay()
    ]
}

const actions = {
    addDecimal, addDecimalPoint, clearDisplay,
    addOperation, updateFormula,
}

export default actions