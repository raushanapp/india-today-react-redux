

import {legacy_createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import { reducerHome } from "./Homes/reducer.homes"
import { loginReducer } from "./LoginAuth/login.reducer.auth"

const rootReducer = combineReducers({
    home:reducerHome,
    login:loginReducer
})



export const  store =legacy_createStore(rootReducer,applyMiddleware(thunk))

