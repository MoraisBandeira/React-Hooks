import React, { useContext } from 'react'
import { CountContext } from '../App-incompleta'
export default componentA =>{

    const countContext = useContext(CountContext)

    return (
        <>
        component A
        <button onClick={ () => countContext.countDispatch('add') }>add</button>
        <button onClick={ () => countContext.countDispatch('less') }>less</button>
        <button onClick={ () => countContext.countDispatch('reset') }>Reset</button>
        </>
    )
}