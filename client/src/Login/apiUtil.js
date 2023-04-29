import axios from "axios"

const instance = axios.create({
    baseURL:"/",
    withCredentials:true
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

export const loginWithCookieApi = (payload)=>{
    return instance.get(ENDPOINTS.LOGIN);
}

export const addFriendApi = (payload)=>{
    return instance.patch(ENDPOINTS.ADD_FRIEND,payload);
}
export const removeFriendApi = (payload)=>{
    return instance.patch(ENDPOINTS.REMOVE_FRIEND,payload);
}

export const signupApi = (payload)=>{
    return instance.post(ENDPOINTS.SIGNUP,payload);
}

export const logoutApi = ()=>{
    return instance.get(ENDPOINTS.LOGOUT);
}
