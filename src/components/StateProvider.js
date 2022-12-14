import React, { createContext, useContext, useReducer } from 'react'


//Prepare data layer
export const StateContext = createContext();

export default function StateProvider({reducer, initialState, children}) {
  return (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
  )
}

// hook allows us to pull info from data layer 
export const useStateValue = () => useContext(StateContext);