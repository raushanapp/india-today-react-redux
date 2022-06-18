import { ERROR_HOME_PAGES, LOADING_HOME_PAGES, SUCCESS_HOME_PAGES } from "./action.type.homes"

import axios from "axios"

export const getHome = ()=>(dispatch)=>{

    dispatch({type:LOADING_HOME_PAGES});
    axios.get("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json")
    .then((r)=>{dispatch({type:SUCCESS_HOME_PAGES,payload:r.data.articles})})
    .catch(()=>{dispatch({type:ERROR_HOME_PAGES})})

}