import axios from "../axios";
//import { testInstance as axios } from "../axios";

const PRE_END = 'auth/';

const currentUser = () => {
    return JSON.parse(localStorage.getItem('currentUser'))
};

const register = (userData) => {

    const requestBody = JSON.stringify(userData)

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        validateStatus: (status) => status === 200
    }

    return axios.post(PRE_END + 'register/', requestBody, requestOptions)
}

function login(username, password) {
    const requestBody = JSON.stringify({username, password})

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        validateStatus: (status) => status === 200
    }
    
    return axios.post(PRE_END + 'login/', requestBody, requestOptions)
        .then(user => {
            console.log(user)
            localStorage.setItem('currentUser', JSON.stringify(user.data));
            return user;
        });
}

const sendConfirm = (email) => {

    const requestBody = JSON.stringify({email})

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        validateStatus: (status) => status === 200
    }

    return axios.post(PRE_END + 'send-confirmation/', requestBody, requestOptions)  
}

const confirmEmail = (confirmData) => {

    const requestBody = JSON.stringify(confirmData)

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        validateStatus: (status) => status === 200
    }

    return axios.post(PRE_END + 'confirm-email/', requestBody, requestOptions)  
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}

export const authenticationService = {
    register,
    login,
    sendConfirm,
    confirmEmail,
    logout,
    currentUser
};