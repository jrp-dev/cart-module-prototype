import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, Store } from "redux"
import combinedReducers from './reducers'
import { useMemo } from "react";
import { composeWithDevTools } from "redux-devtools-extension";

function initStore() {
    return createStore(
        combinedReducers,
        composeWithDevTools(applyMiddleware(thunkMiddleware))        
    )
}

export function useStore() {
    const store = initStore()
    return {
        store
    }
}