import axios from "axios"
import apiCall from "../api/Baseapi"


export const registerAction = (inputData) => {
       return dispatch =>{
        dispatch({
            type: "LOGIN_REQUEST",
            payload: true,
        })
        apiCall.registerActionApi(inputData)
        .then(responce=>{
            let res = responce.data;
             console.log(res)
            if(res.error !== undefined && res.error !== false){
                alert("Registration Failure, " + res.message)
                dispatch({
                    type: "REGISTER_FAILUR",
                    err: res.err,
                   
                })
            }else{
                window.location.href = "/login";
               
                dispatch({
                    type: "REGISTER_SUCCESS",
                    payload: res.success,
                    data: res.data
                })
            }
        })
        .catch(err => {
            console.log(err);
            alert("Somthing Went Wrong With RefisterAction")
        })
       }
        
}

export const loginAction = (inputData) => {
    return dispatch =>{
        dispatch({
            type: "LOGIN_REQUEST",
            payload: true,
        })
        apiCall.loginActionApi(inputData)
        .then(responce=>{
           // console.log(responce)
            let res = responce.data;
            if(!res.error){
                
                
                alert("Login success")
                //router.push('/invoice')
                localStorage.setItem("userid", res.data.id);
              //  console.log(localStorage.getItem("userid"));
               window.location.href = "/invoice";
               
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: false,
                })
            }

            if(res.error){
                alert("Login failure "+ res.message)
                dispatch({
                    type: "ERROR_MESSAGE",
                    payload: true,
                })
            }
        })
        .catch(err => {
            alert("Somthing Went Wrong With loginAction")
        })
    }
     
}




export const resetpassAction = (inputData) => {
    return dispatch =>{
        dispatch({
            type: "LOGIN_REQUEST",
            payload: true,
        })
        apiCall.resetpassActionApi(inputData)

        .then(responce=>{
            // console.log(responce)
             let res = responce.data;
             if(!res.error){
                 
                 
                 alert("password changed")
              
                window.location.href = "/";
                
                 dispatch({
                     type: "LOGIN_SUCCESS",
                     payload: false,
                 })
             }
 
             if(res.error){
                 alert("error "+ res.message)
                 dispatch({
                     type: "ERROR_MESSAGE",
                     payload: true,
                 })
             }
         })
         .catch(err => {
             alert("Somthing Went Wrong With loginAction")
         })

    }
}


export const listEstimation = () => {
    return dispatch =>{
       
        apiCall.estimationListApi()
        .then(responce=>{
           // console.log(responce)
            let res = responce.data;
            if(!res.error){               
                dispatch({
                    type: "ESTIMATION_LIST",
                    payload: res.data,
                })
            }

            if(res.error){
                alert(" failure "+ res.message)
                dispatch({
                    type: "ERROR_MESSAGE",
                    payload: true,
                })
            }
        })
        .catch(err => {
            alert("Somthing Went Wrong With Get estimation Action")
        })
    }
     
}





export const GetAllCategories = (userType, methode, processName, inputData) => {
    return dispatch =>{
        dispatch({
            type: "LOGIN_REQUEST",
            payload: true,
        })
        apiCall.SaveCategorieActionApi(userType, methode, processName, inputData)
        .then(responce=>{
            if(processName === "getAllCategoriesName"){
                dispatch({
                    type: "GET_COMMON_SUCCESS",
                    payload: responce.data,
                    key: processName
                })
            }else{
                dispatch({
                    type: "GET_CATEGORIE_SUCCESS",
                    payload: responce.data,
                })
            }
        })
        .catch(err => {
            dispatch({
                type: "GET_CATEGORIE_FAILURE",
                payload: true,
            })
        })
    }
     
}

export const SaveCategorieAction = (userType, methode, processName, inputData) => {
    return dispatch =>{
        dispatch({
            type: "SAVE_CATEGORIE_REQUEST",
            payload: true,
        })
        apiCall.SaveCategorieActionApi(userType, methode, processName, inputData)
        .then(responce=>{
            dispatch({
                type: "SAVE_CATEGORIE_SUCCESS",
                payload: responce.data,
            })
            if(responce.data.success){
                if(processName === "addShop" || processName === "updateShop" ){
                    dispatch(GetAllShop(userType, "get", "getAllShop"))
                }else{
                    dispatch(GetAllCategories(userType, "get", "getAllCategories"))
                }
            }
        })
        .catch(err => {
            dispatch({
                type: "SAVE_CATEGORIE_FAILURE",
                payload: true,
            })
            alert("Somthing Went Wrong With loginAction")
        })
    }
     
}

export const clearMessage = (status) => {
    return dispatch =>{
        dispatch({
            type: "CLEAT_REQUEST",
            payload: status,
        })
    }
}

export const ActionDelete = (userType, methode, processName, inputData, ) => {

    return dispatch =>{
        dispatch({
            type: "ACTION_REQUEST_DELETE",
        })
        apiCall.apiForDelete(userType, methode, processName, inputData)
        .then((responce)=>{
            if(responce.data.success){
                dispatch({
                    type: "SAVE_CATEGORIE_SUCCESS",
                    payload: responce.data,
                })
                if(processName === "deleteUser"){
                    dispatch(GetAllUser(userType, "get", "getAllUser"))
                }else if(processName === "deleteShop"){
                    dispatch(GetAllShop(userType, "get", "getAllShop"))
                }else{
                    dispatch(GetAllCategories(userType, "get", "getAllCategories"))
                }
            }else {

            }
        })
        .catch(err => {

        })
    }
}

export const GetAllUser = (userType, methode, processName, inputData) => {
    return dispatch =>{
        dispatch({
            type: "LOGIN_REQUEST",
            payload: true,
        })
        apiCall.SaveCategorieActionApi(userType, methode, processName, inputData)
        .then(responce=>{
            dispatch({
                type: "GET_USER_SUCCESS",
                payload: responce.data,
            })
        })
        .catch(err => {
            dispatch({
                type: "SAVE_CATEGORIE_FAILURE",
                payload: true,
            })
            alert("Somthing Went Wrong With loginAction")
        })
    }  
}

export const GetAllShop = (userType, methode, processName, inputData) => {
    return dispatch =>{
        dispatch({
            type: "LOGIN_REQUEST",
            payload: true,
        })
        apiCall.SaveCategorieActionApi(userType, methode, processName, inputData)
        .then(responce=>{
            dispatch({
                type: "GET_USER_SUCCESS",
                payload: responce.data,
            })
        })
        .catch(err => {
            dispatch({
                type: "SAVE_CATEGORIE_FAILURE",
                payload: true,
            })
            alert("Somthing Went Wrong With loginAction")
        })
    }  
}