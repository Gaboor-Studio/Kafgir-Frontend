import axios from "../axios"
import { authHeader } from '../helpers/auth-header'


const customHeader = () => ({
    headers: {
        "content-type": "application/json",
        Authorization: authHeader().Authorization
    },
    validateStatus: (status) => status === 200
})


const getFood = (id) =>{
    return axios.get("member/food/" + String(id)+"/?page=1&size=5");
}

const postComment = (rating,text,food_id) =>{
    const requestOptions = customHeader();
    return axios.post("member/food/"+String(food_id)+"/comments/", {
        "rating":rating,
        "text": text,
    }, requestOptions)

}

export const foodService = {
    getFood,
    postComment
};
