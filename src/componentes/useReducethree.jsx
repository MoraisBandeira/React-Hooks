import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) =>{
    switch(action){
        case 'add':
            return state + 1
        case 'less':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state            
    }
}

export default ReduceThree => {

    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    return (
        <>
            <div> FirstCount - {count}</div>
            <button onClick={() => dispatch('add')}> ADD </button>
            <button onClick={() => dispatch('less')}> LESS </button>
            <button onClick={() => dispatch('reset')}> RESET </button>
            <div>
                <div> SecondCount - {countTwo}</div>
                <button onClick={() => dispatchTwo('add')}> ADD 2 </button>
                <button onClick={() => dispatchTwo('less')}> LESS 2 </button>
                <button onClick={() => dispatchTwo('reset')}> RESET </button>
            </div>

        </>
    )
}