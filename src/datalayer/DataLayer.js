import React, {createContext, useReducer, useContext} from 'react'

export const Context = createContext();

export const DataLayer = ({initialState, reducer, children}) => (

    <Context.Provider value={useReducer(reducer, initialState)}>
        { children }
    </Context.Provider>
)

export const useDataLayerValue = ()=> useContext(Context)



