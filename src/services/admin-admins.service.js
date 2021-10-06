import axios from "../axios"
import { authHeader } from '../helpers/auth-header'

const PRE_END = 'admin/';

const customHeader = () => ({
    headers: {
        "content-type": "application/json",
        Authorization: 'Token cdafd70c8f23c1a654abbd7af0f0440d7bc78a01'
    },
    validateStatus: (status) => status === 200
})

const fetchAdmins = () => {
    const requestOptions = customHeader()
    return axios.get(PRE_END + "admin-management/", requestOptions)
}

const postAdmin = (username, email, name, lastName, password, passwordRepeat, isSuperUser) => {
    const requestOptions = customHeader()
    return axios.post(PRE_END + "admin-management/", {
        "username": username,
        "email": email,
        "name": name,
        "last_name": lastName,
        "password": password,
        "password_repeat": passwordRepeat,
        "is_superuser": isSuperUser
    }, requestOptions)
}

const deleteAdmin = (id) => {
    const requestOptions = customHeader()
    return axios.delete(`${PRE_END}admin-management/${id}`, requestOptions)
}

const changePassword = (newPassword, newPasswordRepeat, id) => {
    const requestOptions = customHeader()
    return axios.put((`${PRE_END}admin-management/${id}/set-password`), {
        "new_password": newPassword,
        "new_password_repeat": newPasswordRepeat
    }, requestOptions)
}

export const adminAdminsService = {
    fetchAdmins,
    postAdmin,
    deleteAdmin,
    changePassword
};