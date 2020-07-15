import { useState } from 'react'

function useCounter(initialCount = 0){
    
    const[count, setCount] = useState(initialCount)
    const add = () =>{
        setCount(prevCount => prevCount + 1)
    }
    const less = () =>{
        setCount(prevCount => prevCount - 1)
    }
    const reset = () =>{
        setCount(initialCount)
    }

    return [count, add, less, reset]
}

export default useCounter