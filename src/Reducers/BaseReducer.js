import {} from "react-redux";

const BaseReducer = (state, actions) =>{
    switch(actions.type){

        case "REGISTER_FAILUR":{
            return {
                ...state,
                redirect: false,
                err: actions.err
            }
        }

        case "LOGIN_REQUEST": {
            return{
                ...state,
                btnLoading: true
            }
        }

        case "LOGIN_SUCCESS": {
            return{
                ...state,
                btnLoading: false
            }
        }

        case "ESTIMATION_LIST": {

            console.log(actions.payload)
            return{
                ...state,
                estimation:actions.payload
            }
        }
        
    }
}

export default BaseReducer;