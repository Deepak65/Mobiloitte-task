
import {actionTypeConstant, cookiesConstants, eventConstants} from "../constants";
 import {sessionManager} from "../managers/sessionManager";

const userData = sessionManager.getDataFromCookies(cookiesConstants.USER);
const userPermission = sessionManager.getDataFromCookies(cookiesConstants.USER_PERMISSION);
const deviceID = sessionManager.getDataFromCookies(cookiesConstants.DEVICE_ID);
const sessionToken = sessionManager.getDataFromCookies(cookiesConstants.SESSION_TOKEN);
const IS_LOGIN = sessionManager.getDataFromCookies(cookiesConstants.IS_LOGIN);
let initialState = {
    userPermission: userPermission,
    userDetails: userData,
    deviceID: deviceID,
    sessionToken: sessionToken,
    isForgotPasswordSuccess: false,
    IsLoggedIn: IS_LOGIN ? IS_LOGIN : false,
    call: true
};

export default function user(state = initialState, action) {
    // console.log("user=======", state, action)
    switch (action.type) {

        case eventConstants.SHOW_LOADER:
            console.log("here")
            return {
                ...state,
                loading: true
            };
        case eventConstants.HIDE_LOADER:
            return {
                ...state,
                loading: false
            };
        case eventConstants.SET_CALL:
            return {
                ...state,
                call: false
            };
        case actionTypeConstant.LOGIN_SUCCESS:
            return {
                ...state,
                IsLoggedIn: true,
                userDetails: action.data,
            };
        case eventConstants.REGISTER_DEVICE_SUCCESS:
            sessionManager.setDataInCookies(action.data ? action.data : null, cookiesConstants.DEVICE_ID);
            return {
                ...state,
                deviceID: action.data
            };
        case eventConstants.REGISTER_DEVICE_FAILURE:
            return {
                ...state,
            };
        case eventConstants.SIGN_UP_SUCCESS:
            sessionManager.setDataInCookies(action.data ? action.data.userDetails : state.userDetails, cookiesConstants.USER);
            sessionManager.setDataInCookies(action.data ? action.data.sessionToken : state.sessionToken, cookiesConstants.SESSION_TOKEN);
            return {
                ...state,
                userDetails: action.data ? action.data.userDetails : state.userDetails,
                sessionToken: action.data ? action.data.sessionToken : state.sessionToken,
                loading: false
            };
        case eventConstants.GET_USER_DETAILS_SUCCESS:
            sessionManager.setDataInCookies(action.data ? action.data : null, cookiesConstants.USER);
            return {
                ...state,
                userDetails: action.data ? action.data : null,
                loading: false
            };
        case eventConstants.GET_USER_PERMISSION_SUCCESS:
            sessionManager.setDataInCookies(action.data ? action.data : null, cookiesConstants.USER_PERMISSION);
            return {
                ...state,
                userPermission: action.data ? action.data : null,
                loading: false
            };
        case eventConstants.LOGOUT_SUCCESS:
            return {
                ...state,
                userPermission: false,
                userDetails: false,
                sessionToken: false,
                loading: false,
                IsLoggedIn: false
            };
        default:
            return state;
    }
}

