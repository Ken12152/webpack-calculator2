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

    return {
        type: 'calculator/addDecimal',
        payload: newDisplayNumber
    }
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
    return { type: 'calculator/clearDisplay' }
}

export function addOperation(displayNumber, operations, addOperation) {
    const newOperations = [].concat(operations, addOperation)

    return {
        type: 'calculator/addOperation',
        payload: newOperations 
    }
}

const actions = {
    addDecimal,
    addDecimalPoint,
    clearDisplay,
    addOperation,
}

export default actions