import React from 'react'

export default props => (
    <button type="button" onClick={ () => props.func() }>
        {props.label}
    </button>
)
