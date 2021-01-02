export default ({ dispatch }) => next => action => 
    Array.isArray(action) ? action.map(dispatch) : next(action)