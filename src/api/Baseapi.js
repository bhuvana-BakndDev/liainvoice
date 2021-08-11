import axios from "axios";
import setting from "./setting"
import apihint from "../../src/apiconfig"

class BaseApi {
    static registerActionApi(inputData){
        return axios.post(apihint + setting.userAuth.register, inputData)
    }

    static loginActionApi(inputData){
        return axios.post(apihint + setting.userAuth.login, inputData)
    }
    static resetpassActionApi(inputData){
        return axios.post(apihint + setting.userAuth.reset, inputData)
    }
    static estimationListApi(){
        return axios.get(apihint + setting.userAuth.estimationlist)
    }
}

export default BaseApi