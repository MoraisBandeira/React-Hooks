import React, {useState, useMemo}  from "react";

export default countMemo =>{

    const[countOne, setCountOne] = useState(0)
    const[countTwo, setCountTwo] = useState(0)

    const addOne = ()=>{
        setCountOne(countOne + 1)
    }
    const addTwo = ()=>{
        setCountTwo(countTwo + 1)
    }

    const isEven = useMemo(() =>{
            let i = 0
            while(i < 2000000000) i++
            return countOne % 2 === 0
    },[countOne])

    return(
        <>
        <button onClick={addOne}> count One - {countOne}</button>
    <span>{isEven ? 'Even':'Odd'}</span>
    <button onClick={addTwo}>count Two - {countTwo}</button>
        </>
    )
}