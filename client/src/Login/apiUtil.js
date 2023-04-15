import axios from "axios"

const instance = axios.create({
    baseURL:"http://localhost:4000/",
})

const ENDPOINTS = {
    LOGIN:'user/login',
    SIGNUP:'user/signup',
    ADD_FRIEND:'user/addFriend',
    REMOVE_FRIEND:'user/removeFriend',
    LOGOUT:'user/logout',
}

export const loginApi = (payload)=>{
    return instance.post(ENDPOINTS.LOGIN,payload);
}

export const signupApi = (payload)=>{
    return instance.post(ENDPOINTS.SIGNUP,payload);
}

export const logoutApi = ()=>{
    return instance.get(ENDPOINTS.LOGOUT);
}
