import { authAPI, securityAPI } from "../../api/api";
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'avocado/authReducer/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'avocado/authReducer/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null // if null, then captcha is not required
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

type SetAuthUserDataActionDateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    data: SetAuthUserDataActionDateType
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({ 
    type: SET_USER_DATA, data: { id, email, login, isAuth } })

type GetCaptchaUrlSuccessPayloadActionType = {
    captchaUrl: string
}

type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({ 
    type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } })

export const getAuthUserData = () => async (dispatch: any) => {
    let data = await authAPI.me();

    if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch: any) => {
    let data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}



export default authReducer;