import { publicRequest } from "../requestMethods"
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login= async (dispatch,user)=>{
    
dispatch(loginStart())
try{
const res = await publicRequest.post("auth/login",user) 
dispatch(loginSuccess(res.data))

}catch(err){
    dispatch(loginFailure())
    console.log(err,"errr")
}
}
export const register= async (dispatch,user)=>{

    // username,email,password
    
    dispatch(loginStart())
    console.log(user, 'from register api');
    
    try{
    const res = await publicRequest.post("auth/register",user) 
    dispatch(loginSuccess(res.data))
    
    }catch(err){
        dispatch(loginFailure())
        console.log(err,"errr")
    }
    }