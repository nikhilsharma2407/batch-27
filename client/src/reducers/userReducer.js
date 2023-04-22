import { addFriendApi, loginApi, loginWithCookieApi, logoutApi, removeFriendApi } from "../Login/apiUtil";

const initialState = {
    friendList: [],
    name: '',
    username: '',
    message: '',
    success: false,
    loading:false,
};

const ACTIONS = {
    SIGNUP: 'SIGNUP',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    ADD_FRIEND: 'ADD_FRIEND',
    REMOVE_FRIEND: 'REMOVE_FRIEND',
    ERROR: 'ERROR',
    RESET_MSG:'RESET_MSG',
    LOADING:'LOADING',
}

export const loadingActionCreator= (payload)=>({type:ACTIONS.LOADING,payload})
const resetMsgActionCreator= ()=>({type:ACTIONS.RESET_MSG})


// Must return a function
const asyncActionCreator = (apiHelperFn, action, apiPayload) => {
    return async (dispatch) => {
        // dispatch({type:ACTIONS.RESET_MSG})
        try {
            dispatch(resetMsgActionCreator())
            dispatch(loadingActionCreator(true))
            const data = (await apiHelperFn(apiPayload)).data;
            console.log(data);
            // payload is required for reducer
            dispatch({ ...action, payload: data })
        } catch (error) {
            const { message } = error.response.data
            console.log(error);
            dispatch({ type: ACTIONS.ERROR, payload: { sucess: false, message } })
        } finally{
            dispatch(loadingActionCreator(false))
        }
    }
};

export const loginActionCreator = (apiPayload) => {
    // const action = { type: ACTIONS.LOGIN }
    return asyncActionCreator(loginApi, { type: ACTIONS.LOGIN }, apiPayload)
}

export const loginWithCookieActionCreator = () => {
    const action = { type: ACTIONS.LOGIN }
    return asyncActionCreator(loginWithCookieApi, action)
};

export const addFriendActionCreator = (apiPayload) => {
    const action = { type: ACTIONS.ADD_FRIEND };
    return asyncActionCreator(addFriendApi, action, apiPayload);
}

export const removeFriendActionCreator = (apiPayload) => {
    const action = { type: ACTIONS.REMOVE_FRIEND };
    return asyncActionCreator(removeFriendApi, action, apiPayload);
}

export const logoutActionCreator = () => {
    const action = { type: ACTIONS.LOGOUT };
    return asyncActionCreator(logoutApi, action);
}

export const userReducer = (state = initialState, action) => {
    const { success, message, data } = action.payload || {}
    switch (action.type) {
        case ACTIONS.LOGIN:
            const { name, username, friendList } = data;
            return { ...state, name, username, friendList, success, message };

        case ACTIONS.ADD_FRIEND:
            return { ...state, success, message, friendList: data }

        case ACTIONS.REMOVE_FRIEND:
            return { ...state, success, message, friendList: data }

        case ACTIONS.ERROR:
            return { ...state, message, success };

        case ACTIONS.LOGOUT:
            return initialState;

        case ACTIONS.RESET_MSG:
            return {...state,message:''}

        case ACTIONS.LOADING:
            return {...state,loading:action.payload}
        default:
            return state
    }
}
