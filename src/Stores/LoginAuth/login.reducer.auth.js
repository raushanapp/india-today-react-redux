import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_PROCESS } from "./login.action.type.auth"

let token = localStorage.getItem("token")
const initState = {
    loading:false,
    isAuth : !!token ,
    // isAuth : token ? true :false,
    error:false,
    token:token
}

export const loginReducer = (state=initState,{type,payload})=> {
    switch(type) {
        case LOGIN_LOADING :{
            return {
                ...state,
                loading:true,
                error:false,
                isAuth:false
            }
        }
        case LOGIN_SUCCESS :{
            console.log("token:rr-",payload)
            localStorage.setItem("token",payload.token)
            return {
                ...state,
                loading:false,
                error:false,
                isAuth:true,
                token:payload.token
            }
        }
        case LOGIN_ERROR :{
            return {
                ...state,
                loading:false,
                error:true,
                isAuth:false
            }
        }
        case LOGOUT_PROCESS :{
            localStorage.removeItem("token")
            return {
                ...state,
                isAuth:false,
                token:""
            }
        }
       default:{
           return state
       }
    }
}