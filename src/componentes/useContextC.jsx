import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../App'


export default ContextC => {

    return (
        <UserContext.Consumer>
            {
                user => {
                    return (
                        <ChannelContext.Consumer>{
                            Channel => {
                                return <div> User value: {user} , Channel value: {Channel}  </div>
                            }
                        }
                        </ChannelContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    )
}