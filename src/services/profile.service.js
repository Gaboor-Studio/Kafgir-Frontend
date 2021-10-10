import axios from "../axios"
import { authHeader } from '../helpers/auth-header'

const PRE_END = 'member/';

const customHeader = () => ({
    headers: {
        "content-type": "application/json",
        Authorization: 'Token cdafd70c8f23c1a654abbd7af0f0440d7bc78a01'
    },
    validateStatus: (status) => status === 200
})

const fetchProfileInfo = () => {
    const requestOptions = customHeader()
    return axios.get(PRE_END + "profile/", requestOptions)

}

const editProfile = (name, lastName) => {
    const requestOptions = customHeader()
    return axios.put(PRE_END + "profile/edit-profile/", {
        "name": name,
        "last_name": lastName
    }, requestOptions)

}

const deleteProfilePicture = () => {
    const requestOptions = customHeader()
    return axios.delete(PRE_END + "profile/picture/", requestOptions)
}

export const profileService = {
    fetchProfileInfo,
    editProfile,
    deleteProfilePicture,

};