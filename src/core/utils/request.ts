import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import { CLIENT_ID, CLIENT_SECRET, getSessionData, logout } from './auth';
//NAO É NECESSARIO POIS AXIOSREQUESTCONFIG JA EXISTE OS ATRIBUTOS
// type RequestParams = {
//     method?: Method;
//     url: string;
//     data?: object | string;
//     params?: object;
//     headers?: object;
// }
type LoginData = {
    username: string;
    password: string;
}
const BASE_URL = 'http://localhost:8080';
//const BASE_URL = 'https://wiliam-dscatalog.herokuapp.com';

axios.interceptors.response.use(function (response) {
    //console.log('a resposta deu certo',response)

    return response;
}, function (error) {
    if (error.response.status === 401) {
        //console.log('redirecionar para login')
        logout();
    }
    return Promise.reject(error);
});




export const makeRequest = (params: AxiosRequestConfig) => {
    return axios({
        ...params,
        baseURL: BASE_URL
    });
}
export const makePrivateRequest = (params: AxiosRequestConfig) => {
    const sessionData = getSessionData();


    const headers = {
        'Authorization': `Bearer ${sessionData.access_token}`
    }
    return makeRequest({ ...params, headers });
}

export const makeLogin = (loginData: LoginData) => {

    const token = `${CLIENT_ID}:${CLIENT_SECRET}`;

    const headers = {
        Authorization: `Basic ${window.btoa(token)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    //var qs = require('qs');
    const payload = qs.stringify({ ...loginData, grant_type: 'password' });
    //const payload = `username=${loginData.username}&password=${loginData.password}&grant_type=password`;
    return makeRequest({ url: '/oauth/token', data: payload, method: 'POST', headers });
}

