import React from 'react'
import ContextC from './useContextC'
import { UserContext, ChannelContext } from '../App'
import { useContext } from 'react'


export default ContextB => {
 
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return(
        <>
        <div>{user} - {channel}</div>
        </>
    )
}