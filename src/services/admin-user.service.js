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

const fetchUsers = () => {
    const requestOptions = customHeader()
    return axios.get(PRE_END + "user-management/", requestOptions)
}

const changePassword = (newPassword, id) => {
    const requestOptions = customHeader()
    return axios.post(`http://84.241.22.193:8000/api/admin/user-management/${id}/set-password/`, {
        "new_password": newPassword
    }, requestOptions)
}

const editUser = (reqData, id) => {
    const requestOptions = customHeader()
    return axios.put(`${PRE_END}user-management/${id}/`, reqData, requestOptions)
}

export const adminUserService = {
    fetchUsers,
    changePassword,
    editUser
};