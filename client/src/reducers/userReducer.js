import { loginApi } from "../Login/apiUtil";

const initialState = {
    friendList: [],
    name: '',
    username: '',
    message: '',
    success: false,
};

const ACTIONS = {
    SIGNUP: 'SIGNUP',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    ADD_FRIEND: 'ADD_FRIEND',
    REMOVE_FRIEND: 'REMOVE_FRIEND',
    ERROR: 'ERROR'
}

// export const loginActionCreator = async (apiPayload) => {
//         try {
//             const data = (await loginApi(apiPayload)).data;
//             console.log(data);
//             return { type: ACTIONS.LOGIN, payload: data }
//         } catch (error) {
//             console.log(error);
//             return { type: ACTIONS.ERROR, payload: { sucess: false, message: error.message } }
//         }
// };

export const loginActionCreator = (apiPayload) => {
    return async (dispatch) => {
        try {
            const data = (await loginApi(apiPayload)).data;
            console.log(data);
            dispatch({ type: ACTIONS.LOGIN, payload: data })
        } catch (error) {
            console.log(error);
            dispatch({ type: ACTIONS.ERROR, payload: { sucess: false, message: error.message } })
        }
    }
};


export const userReducer = (state = initialState, action) => {
    const { success, message, data } = action.payload || {}
    switch (action.type) {

        case ACTIONS.LOGIN:
            const { name, username, friendList } = data;
            return { ...state, name, username, friendList, success, message };

        default:
            return state
    }
}
