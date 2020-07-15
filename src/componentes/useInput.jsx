import { useState } from 'react'

function useInput(initialValue){
    const[value, steValue] = useState(initialValue)
    const reset = () =>{
        steValue(initialValue)
    }
    const bind = {
        value,
        onChange: e =>{
            steValue(e.target.value)
        }
    }
    return [value, bind, reset]
}

export default useInput