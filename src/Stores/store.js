

import {legacy_createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import { reducerHome } from "./Homes/reducer.homes"

const rootReducer = combineReducers({
    home:reducerHome
})



export const  store =legacy_createStore(rootReducer,applyMiddleware(thunk))

