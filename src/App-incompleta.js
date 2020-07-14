import React, {useReducer}from 'react';
//import Teste from './componentes/useContextA'
//import Teste from './componentes/useReduce'
//import Teste from './componentes/useReducetwo'
//import Teste from './componentes/useReducethree'
//export const UserContext =  React.createContext()
//export const ChannelContext =  React.createContext()
import ComponentA from './componentes/useReduceA'
import ComponentD from './componentes/useReduceD'
import ComponentF from './componentes/useReduceF'

export const CountContext = React.createContext()

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

function App() {

  const[ count, dispatch] = useReducer(reducer,initialState)

  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch }}>
      Count - {count}
       <ComponentA/>
       <ComponentD/>
       <ComponentF/>
    </CountContext.Provider>
    
  );
}
 
export default App;
