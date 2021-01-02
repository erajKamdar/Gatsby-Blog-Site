import React, {createContext, useReducer} from 'react';
import {Reducer} from "./GlobalReducer";

interface initialStateProps {
    loginModal : boolean,
    token: string,
    dispatch : React.Dispatch<any>,
    user : any,
    authenticated : boolean
}

const initialState = {
    loginModal : false,
    token : "",
    dispatch : () => {},
    user : {},
    authenticated : false,
}


export const ActionContext = createContext<initialStateProps>(initialState);

const GlobalState = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <ActionContext.Provider value={{
            loginModal: state.loginModal,
            authenticated : state.authenticated,
            user : state.user,
            token: state.token,
            dispatch
        }}>
            {children}
        </ActionContext.Provider>
    )
}

export default GlobalState;