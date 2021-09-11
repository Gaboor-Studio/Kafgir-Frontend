import React from "react"
import FoodCard from "../../UI/FoodCard/FoodCard"
import PageHeader from "../../UI/PageHeader/PageHeader"
import Ghorme from "../../../assets/food_pics/ghorme.jpg"
import Gheime from "../../../assets/food_pics/gheime.jpg"
import Karafs from "../../../assets/food_pics/karafs.jpg"
import classes from "./PopularFood.module.css"

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
        },        {
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
        },        {
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
        },        {
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
            <PageHeader title="غذا های محبوب ماه" link="/"></PageHeader>
            <div className={classes.container} dir="rtl">
                {foods.map(curFood=>(<FoodCard food={curFood.food} key={curFood.id} link="/recipe"></FoodCard>))}
            </div>
        </div>
    );
}

export default PopularFood;