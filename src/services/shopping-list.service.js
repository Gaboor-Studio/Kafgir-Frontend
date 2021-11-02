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

const fetchShoppingItems = () => {
    const requestOptions = customHeader()
    return axios.get(PRE_END + "shopping-list/", requestOptions)

}

const postItem = (title, amount) => {
    const requestOptions = customHeader()
    return axios.post(PRE_END + "shopping-list/item/", {
        'title': title,
        'amount': amount
    }, requestOptions)
}

export const shoppingListService = {
    fetchShoppingItems,
    postItem,

};