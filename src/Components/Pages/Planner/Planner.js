import React, { useEffect } from "react";
import { useState } from "react";
import classes from "./Planner.module.css"
import WeekSelector from "./WeekSelector"
import Week from "./Week.js"
import omelete from "../../../assets/omelete.jpg"
import ghormesabzi from "../../../assets/ghorme.jpg"
const Planner = (props) => {
    const weeksArray = [
        {
            period: "۲۶ تیر - ۱ مرداد",
            days: [
                {
                    name: "شنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },

                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "یکشنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "دوشنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "سه شنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "چهارشنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "پنج شنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "جمعه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
            ]
        },
        {
            period: "۲ تیر - ۸ تیر",
            days: [
                {
                    name: "شنبه",
                    breakfast: {
                        name: "املت",
                        imageUrl: omelete,
                        link: "",
                    },

                    lunch:{
                    name: "قرمه سبزی",
                    imageUrl: ghormesabzi,
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "یکشنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "دوشنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "سه شنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "چهارشنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "پنج شنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "جمعه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
            ]

        },
        {
            period: "۹ تیر - ۱۵ تیر",
            days: [
                {
                    name: "شنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "یکشنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "دوشنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "سه شنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "چهارشنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "پنج شنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "جمعه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
            ]

        },
        {
            period: "۱۶ تیر - ۲۲ تیر",
            days: [
                {
                    name: "شنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "یکشنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "دوشنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "سه شنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "چهارشنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "پنج شنبه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
                {
                    name: "جمعه",
                    breakfast: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    lunch:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    },
                    
                    dinner:{
                    name: "",
                    imageUrl: "",
                    link: "",
                    }
                },
            ]

        }
    ]
    const [displayingWeekVar, setDisplayingWeekVar] = useState(1);
    const changeDisplayingWeekVar = (value) => {
        setDisplayingWeekVar(prevvalue => prevvalue + value);
    }
    return (
        <div>
            <WeekSelector weeks={weeksArray} displayingWeek={displayingWeekVar} setDisplayingWeek={changeDisplayingWeekVar} />
            <Week weekData={weeksArray[displayingWeekVar]}></Week>
        </div>
    );
}

export default Planner;