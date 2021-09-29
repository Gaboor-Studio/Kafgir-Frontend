// import axios from "../axios";
import { testInstance as axios } from "../axios";
import {authHeader} from '../helpers/auth-header'

const PRE_END = 'admin/';

const customHeader = () => ({
    headers: { 'Content-Type': 'application/json', ...authHeader() },
    validateStatus: (status) => status === 200
})

const fetchTags = () => {

    const requestOptions = customHeader()

    return axios.get(PRE_END + 'tag/', requestOptions)
}

const postTag = (tagData) => {

    const requestData = JSON.stringify(tagData)

    const requestOptions = customHeader()

    return axios.post(PRE_END + 'tag/', requestData, requestOptions)
}

const editTag = (id, tagData) => {
    
    const requestData = JSON.stringify(tagData)

    const requestOptions = customHeader()

    return axios.put(PRE_END + `tag/${id}/`, requestData, requestOptions)
}

const removeTag = (id) => {

    const requestOptions = customHeader()

    return axios.delete(PRE_END + `tag/${id}/`, requestOptions)
}

export const adminTagService = {
    fetchTags,
    postTag,
    editTag,
    removeTag
};