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

const fetchFoods = () => {
    const requestOptions = customHeader()
    return axios.get(PRE_END + "food/", requestOptions)
}

const postFood = (foodName, foodDifficulty, foodTime, ingredients, recipe, tags) => {
    const requestOptions = customHeader()
    return axios.post(PRE_END + "food/", {
        "title": foodName,
        "level": parseInt(foodDifficulty),
        "cooking_time": foodTime,
        "ingredients": ingredients,
        "recipe": recipe,
        "tags": tags
    }, requestOptions)
}

const fetchTags = () => {
    const requestOptions = customHeader()
    return axios.get(PRE_END + "tag/", requestOptions)
}

export const adminFoodService = {
    fetchFoods,
    postFood,
    fetchTags
};