import axios from "../axios";
// import { testInstance as axios } from "../axios";
import {authHeader} from '../helpers/auth-header'

const PRE_END = 'member/';

const customHeader = () => ({
    headers: { 'Content-Type': 'application/json', ...authHeader() },
    validateStatus: (status) => status === 200
})

const history = (cnt) => {
    return axios.get(PRE_END + `history/${cnt ? `?cnt=${cnt}`: ''}`, customHeader())
}

const clearHistory = () => {
    return axios.delete(PRE_END + 'history/', customHeader())
}

const removeHistory = (id) => {
    return axios.delete(PRE_END + `history/${id}/`, customHeader())
}

export const historyService = {
    history,
    clearHistory,
    removeHistory
};