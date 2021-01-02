const INITIAL_STATE = {
    displayValue: '',
    operations: [],
    operands: [],
    waitNextNumber: false,
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'calculator/addDecimal':
            return { ...state, displayValue: action.payload }
        case 'calculator/clearDisplay':
            return { ...state, displayValue: '0' }
        case 'calculator/addOperation':
            return { ...state, operations: action.payload }
        case 'calculator/addOperand':
            return { ...state, operands: action.payload }
        case 'calculator/changeWaitingStatus':
            return { ...state, waitNextNumber: action.payload }
        default:
            return state
    }
}