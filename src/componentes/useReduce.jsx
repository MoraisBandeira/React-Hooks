import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) =>{
     switch(action){
         case 'ADD':
             return state + 1
         case 'LESS':
             return state - 1
         case 'RESET':
             return initialState
         default:
             return state            
     }
}

export default Reduce => {
  
    const [ count, dispatch ] = useReducer( reducer, initialState )

    return(
        <>
        <div> Count - {count}</div>
        <button onClick={()=> dispatch('ADD')}> ADD </button>
        <button onClick={()=> dispatch('LESS')}> LESS </button>
        <button onClick={()=> dispatch('RESET')}> RESET </button>
        </>
    )
}