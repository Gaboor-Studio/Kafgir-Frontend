import axios from "../axios";
// import { testInstance as axios } from "../axios";
import {authHeader} from '../helpers/auth-header'

const PRE_END = 'member/';

const customHeader = () => ({
    headers: { 'Content-Type': 'application/json', ...authHeader() },
    validateStatus: (status) => status === 200
})

const search = ({title, category, ingredient_list, level, range}) => {

    const params = new URLSearchParams(`title=${title}`)
    if (category){params.append('category', category.id)}
    if (ingredient_list && ingredient_list.length > 0){params.append('ingredients', ingredient_list.join('_'))}
    if (level){params.append('level', level)}
    if (range && range.minimum){params.append('lct', range.minimum)}
    if (range && range.maximum){params.append('uct', range.maximum)}

    return axios.get(PRE_END + `search/?${params.toString()}`, customHeader())
}

export const searchService = {
    search,
};