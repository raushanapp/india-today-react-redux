import { ERROR_HOME_PAGES, LOADING_HOME_PAGES, SUCCESS_HOME_PAGES } from "./action.type.homes"

const initState = {
    loading:false,
    error:false,
    data:[]
}

export const reducerHome = (state=initState,{type,payload})=>{
    //  console.log(payload)
    switch(type) {

        case LOADING_HOME_PAGES :{
            return {
                ...state,
                loading:true,
                error:false
            }
        }
        case SUCCESS_HOME_PAGES :{
            // console.log(payload)
            return {
                ...state,
                loading:false,
                error:false,
                // data:[...state.data,
                //     {
                //         ...payload,
                //         loading:false
                      
                //     }
                
                // ]
                data:payload
            }
        }
        case ERROR_HOME_PAGES :{
            return {
                ...state,
                loading:false,
                error:true
            }
        }
        default :{
            return state
        }
    }

}