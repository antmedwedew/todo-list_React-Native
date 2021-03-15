import {CHANGE_SCREEN} from '../types'
import React, { useReducer } from 'react'
import {ScreenContext} from './screenContex'
import {ScreenReducer} from './screenReducer'

export const ScreenState = ({children}) => {
  const [state, dispach] = useReducer(ScreenReducer, null)

  const changeScreen = id => dispach({type: CHANGE_SCREEN, payload: id})

  return <ScreenContext.Provider value={{
            changeScreen, 
            todoId: state
          }}
         >
          {children}
         </ScreenContext.Provider>
}