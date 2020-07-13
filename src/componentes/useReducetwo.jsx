import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'LESS':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'ADD2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'LESS2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

export default ReduceTwo => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div> FirstCount - {count.firstCounter}</div>
            <div> SecondCount - {count.secondCounter}</div>
            <button onClick={() => dispatch({type: 'ADD', valeu: 1 })}> ADD </button>
            <button onClick={() => dispatch({type: 'LESS', valeu: 1 })}> LESS </button>
            <button onClick={() => dispatch({type: 'RESET' })}> RESET </button>
            <button onClick={() => dispatch({type: 'ADD2', valeu: 1 })}> ADD 2 </button>
            <button onClick={() => dispatch({type: 'LESS2', valeu: 1 })}> LESS 2 </button>
        </>
    )
}