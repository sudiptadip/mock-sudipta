import { CREATE_FAILIUR, CREATE_REQUEST, CREATE_SUCCESS } from "./Action.type";

const signup = {
    isLooding : false,
    isSuccess : false,
    isError : false,
    data : []
}

export default function AuthReducer(state = signup, action) {
    const { type, payload } = action;
    switch(type){
        case CREATE_REQUEST : return {
            ...state,
            isLooding : true,
        }
        case CREATE_SUCCESS : return {
            ...state,
            isSuccess : true,
            isLooding : false,
        }
        case CREATE_FAILIUR : return {
            ...state,
            isError: true,
            isLooding : false
        }

        default : return state;
    }
    
}
