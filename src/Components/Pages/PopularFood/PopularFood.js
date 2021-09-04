import React from "react"
import FoodCard from "../../UI/FoodCard/FoodCard"
import Ghorme from "../../../assets/food_pics/ghorme.jpg"
import Gheime from "../../../assets/food_pics/gheime.jpg"
import Karafs from "../../../assets/food_pics/karafs.jpg"

const PopularFood = () => {
    const foods=[
        {
            food:{
                picture: Ghorme,
                name: "قرمه سبزی"
            },
            id: "food1"
        },
        {
            food:{
                picture: Gheime,
                name: "قیمه"
            },
            id: "food2"
        },
        {
            food:{
                picture: Karafs,
                name: "خورشت کرفس"
            },
            id: "food3"
        },
    ]
    return (
        <div>
            {foods.map(curFood=>(<FoodCard food={curFood.food} key={curFood.id}></FoodCard>))}
        </div>
    );
}

export default PopularFood;