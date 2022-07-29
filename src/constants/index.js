/**
 * Created by Ayush Kulshrestha on 18/09/2019.
 */


export const httpConstants = {
    METHOD_TYPE: {
        POST: 'POST',
        PUT: 'PUT',
        GET: 'GET',
        DELETE: 'DELETE',
    },
    CONTENT_TYPE: {
        APPLICATION_JSON: 'application/json',
        MULTIPART_FORM_DATA: 'multipart/form-data',
        APPLICATION_FORM_URLENCODED: 'application/x-www-form-urlencoded',
        IMAGE_PNG: 'image/png'
    },
    DEVICE_TYPE: {
        WEB: 'web'
    },
    API_END_POINT: {
        TRENDING_HASHTAGS: 'trending-hashtags',
        FORGOT_PASSWORD:"forgot-password",
        CHANGE_PASSWORD:"change-password",
        NFT_SELLER:"top-nft-seller",
        NFT_BUYER:"top-nft-buyers",
        TOP_NFT_SELLER:"top-nft-seller",
        HASHTAGS: "hastags",
        TOP_NFT_BUYER:"top-nft-buyers",
        REVENUE:"total-revenue-metric",
        NFT_ACTIVE_USER:"get-active-users",
        NFT_GET_VIDEO:"get-active-users",
        BLOCK_HASHTAG:"block-hashtags",
        UN_BLOCK_HASHTAG:"unblock-hashtags",
        DELETE_REPORT:"delete-report",
        REPORTED_CONTENTS:"reported-contents",
        BLOCK_USERS:"block-user",
        UNBLOCK_USERS:"unblock-user",
        BLOCKED_USERS:"blocked-users",
        SEARCH_USERS_LIST:"search-user-list",
        SEARCH_HASHTAG_LIST:"search-hashtags",
        TOTAL_VIDEO_METRIC: "total-video-metric",
        TOTAL_REVENUE_METRIC: "total-revenue-metric",
        TOTAL_ACCOUNTS_CREATED: "total-accounts-created",
        DELETE_ENTRY:"delete-blocked-list-user",
        TERMS_POLICY:"save-privacy-policy",
        TOTAL_NFT_SOLD_METRIC:"total-nft-sold-metric",
        GET_TERMS_POLICY:"get-privacy-policy",
        TERMS_CONDITION:"save-terms-conditions",
        GET_TERMS_CONDITION:"get-terms-conditions",
        NOTIFICATION_LIST:"notification-list",
        NOTIFICATION_COUNT:"notification-count",
    }
};
export const genericConstants ={
    LOGIN_SUCCESSFULL:"Login Successful",
    INCORRECT_USERNAME_PASS:"Incorrect username or password.",
    INVALID_EMAIL:"Email is not valid!",
        DO_NOT_HAVE_PERMISSION:"You Do Not Have Permission",
        CANT_GET_USER_DETAILS:"Can't Get User Details",
        INVALID_PASSWORD_OR_EMAIL: "Invalid Credentials, failed to Login",
}
// export const cookiesConstants = {
//     DEVICE_ID: "deviceId",
//   SESSION_TOKEN: "sessionToken",
//   ACCESS_TOKEN: "accessToken",
//   ID_TOKEN: "idToken",
//   EXPIRES_AT: "expiresAt",
//   USER: "user",
//   COMPANY: "company",
//   USER_META_DATA: "userMetaData",
//   USER_DETAILS: "userDetails",
//   USER_ROLE: "userRole"
//
//   };
//   export const eventConstants = {
//     SHOW_LOADER: "SHOW_LOADER",
//     HIDE_LOADER: "HIDE_LOADER",
//     SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
//     LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
//     CURRENT_CLINIC_ID: "CURRENT_CLINIC_ID"
//   };
  export const userRoles = {
    SUPER_ADMIN: "rol_OJ7Enx7Ma1Zpig2o",
    CLINIC_ADMIN: "rol_bdK6jgOBZTnS4Ih6",
    SUB_ADMIN: "rol_SlFhkCSmbve6DDY8",
    DOCTOR:"rol_cIl1X6DqOb7J1Ip0",
    CONTENT_ADMIN:"rol_wAdWOPpwwZLV7Gbf"
}
export const cookiesConstants = {

    DEVICE_ID: 'deviceId',
    SESSION_TOKEN: 'sessionToken',
    USER: 'user',
    SPECIALITIES: 'specialities',
    USER_PERMISSION: 'userPermission',
    IS_ADMIN_VIEW: 'admin-view',
    DEVICE_NAME: 'deviceName',
    DEVICE_USERNAME: 'deviceUserName',
    DEVICE_PASSWORD: 'devicePassword',
    DEVICE_RTSP: 'deviceRTSP',
    AUTH0_ACCESS_TOKEN: 'auth-access-token',
    AUTH0_ID_TOKEN: 'auth-id-token',
    USER_DETAIL: 'user-detail',
    EMAIL_ID: 'email-id',
    USER_ID: 'user-id',
    PASSWORD: 'password',
    JWT_TOKEN: 'jwt-token',
    USER_SUB: 'user-sub',
    USER_ROLE: "user-role",
    USER_PICTURE: 'user-img',
    ECONSULT: 'econsult',
    IS_LOGIN: 'IS_LOGIN',
    REMEMBER_ME:"REMEMBER_ME",
};
export const actionTypeConstant = {
    SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
    REGISTER_DEVICE_SUCCESS: "REGISTER_DEVICE_SUCCESS",
    REGISTER_DEVICE_FAILURE: "REGISTER_DEVICE_FAILURE",
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    UPDATE_SUCCESS: 'UPDATE_SUCCESS',

};
export const eventConstants = {

    SHOW_LOADER: "SHOW_LOADER",
    HIDE_LOADER: "HIDE_LOADER",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",


    SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
    GET_USER_DETAILS_SUCCESS: "GET_USER_DETAILS_SUCCESS",
    GET_USER_PERMISSION_SUCCESS: "GET_USER_PERMISSION_SUCCESS",

    REGISTER_DEVICE_SUCCESS: "REGISTER_DEVICE_SUCCESS",
    REGISTER_DEVICE_FAILURE: "REGISTER_DEVICE_FAILURE",
    SET_CALL: "SET_CALL",

    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    SET_ECONSULT_DATA: "SET_ECONSULT_DATA",
    ECONSULT_DATA_UPDATE: "ECONSULT_DATA_UPDATE",
    terms:"TERMS",
    policy:"POLICY",
};