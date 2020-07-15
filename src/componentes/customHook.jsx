import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle'
import useCounter from './useCounter'
import useInput from './useInput'

export default custonHook => {

    const[count, add, less, reset] = useCounter(0)
    const[firstName, bindFirstName, resetFirstName] = useInput('')
    const[lastName, bindLastName, resetLastName] = useInput('')
    useDocumentTitle(count)

    const submitHandler = e =>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }


    return(
        <>
        <div>
            <button>Count - {count}</button>
        <button onClick={add}>add</button>
        <button onClick={less}>less</button>
        <button onClick={reset}>reset</button>
        </div>
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>FirtName</label>
                    <input 
                    type="text"
                    {...bindFirstName}
                    />
                </div>
                <div>
                    <label> Last name</label>
                    <input 
                    type="text"
                    {...bindLastName}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
        
        </>
    )
}