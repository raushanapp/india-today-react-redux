

import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_PROCESS } from "./login.action.type.auth"

import axios from "axios"
export const loginApi =(data) =>(dispatch)=> {

    dispatch({type:LOGIN_LOADING});
    axios.post("https://reqres.in/api/login",{
        email:data.email,
        password:data.password
    })    
    .then((r)=>{
        console.log("dara:",r.data)
        dispatch({type:LOGIN_SUCCESS,payload:r.data})
    })
    .catch(()=>{
        dispatch({type:LOGIN_ERROR})
    })
}

export const logoutApi = ()=>({type :LOGOUT_PROCESS})