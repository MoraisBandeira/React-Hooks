import React, { useEffect, useRef } from 'react'

export default FocusInput =>{
         const inputRef = useRef(null)

         useEffect(() => {
                inputRef.current.focus()
         },[])
    return(
        <>
        <input ref={inputRef} type="text"/>
        </>
    )
}