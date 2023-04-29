import { addFriendApi, loginApi, loginWithCookieApi, logoutApi, removeFriendApi } from "../Login/apiUtil";


export interface IState {
    friendList: string[];
    name: string
    username: string
    message: string
    success: boolean
    loading: boolean | null
    isLoggedIn: boolean | null
    usersLoading: boolean
}

export type IUserReducer = (state: IState, action: { type: string, payload: any }) => IState


const initialState: IState = {
    friendList: [],
    name: '',
    username: '',
    message: '',
    success: false,
    loading: null,
    isLoggedIn: null,
    usersLoading: false,
};

enum ACTIONS {
    SIGNUP = 'SIGNUP',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    ADD_FRIEND = 'ADD_FRIEND',
    REMOVE_FRIEND = 'REMOVE_FRIEND',
    ERROR = 'ERROR',
    RESET_MSG = 'RESET_MSG',
    LOADING = 'LOADING',
    IS_LOGGED_IN = 'IS_LOGGED_IN',
}

export const loadingActionCreator = (payload) => ({ type: ACTIONS.LOADING, payload })
const resetMsgActionCreator = () => ({ type: ACTIONS.RESET_MSG })


// Must return a function
const asyncActionCreator = (apiHelperFn, action, apiPayload?, isLoginApi = false) => {
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
            if (isLoginApi) {
                dispatch({ type: ACTIONS.IS_LOGGED_IN, payload: false })
            }
        } finally {
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
    return asyncActionCreator(loginWithCookieApi, action, null, true)
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


export const isLoggedInActionCreator = (payload) => {
    return { type: ACTIONS.IS_LOGGED_IN, payload };
}


export const userReducer: IUserReducer = (state = initialState, action) => {
    const { success, message, data } = action.payload || {}
    switch (action.type) {
        case ACTIONS.LOGIN:
            const { name, username, friendList } = data;
            return { ...state, name, username, friendList, success, message, isLoggedIn: true };

        case ACTIONS.ADD_FRIEND:
            return { ...state, success, message, friendList: data, }

        case ACTIONS.REMOVE_FRIEND:
            return { ...state, success, message, friendList: data }

        case ACTIONS.ERROR:
            return { ...state, message, success };

        case ACTIONS.LOGOUT:
            return {initialState,isLoggedIn:false};

        case ACTIONS.RESET_MSG:
            return { ...state, message: '' }

        case ACTIONS.LOADING:
            return { ...state, loading: action.payload }

        case ACTIONS.IS_LOGGED_IN:
            return { ...state, isLoggedIn: action.payload }

        default:
            return state
    }
}
