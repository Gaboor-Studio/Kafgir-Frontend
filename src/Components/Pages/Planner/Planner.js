//Planner page component which is responsible for selecting a week with WeekSelector component and then showing it's planning with week and day components.

import React from "react";
import { useState } from "react";
import WeekSelector from "./WeekSelector"
import Week from "./Week.js"
import omelete from "../../../assets/omelete.jpg"
import ghormesabzi from "../../../assets/ghorme.jpg"
const Planner = (props) => {
    const [weeksArray,setWeeksArray] = useState([
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "قرمه سبزی",
                        imageUrl: ghormesabzi,
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
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

                    lunch: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    },

                    dinner: {
                        name: "",
                        imageUrl: "",
                        link: "",
                    }
                },
            ]

        }
    ]);
    const [displayingWeekVar, setDisplayingWeekVar] = useState(1);
    //to remove a meal from plan
    const sendRemoveRequest = (meal, day, week) => {
        let newWeeksArray=weeksArray;
        newWeeksArray[week].days[day][meal].name="";
        newWeeksArray[week].days[day][meal].imageUrl="";
        newWeeksArray[week].days[day][meal].link="";
        setWeeksArray(prev=>([...newWeeksArray]));
    }
    //to change the week that will be shown in the page
    const changeDisplayingWeekVar = (value) => {
        setDisplayingWeekVar(prevvalue => prevvalue + value);
    }
    return (
        <div>
            <WeekSelector weeks={weeksArray} displayingWeek={displayingWeekVar} setDisplayingWeek={changeDisplayingWeekVar} />
            <Week sendRemoveRequest={sendRemoveRequest} weekNo={displayingWeekVar} weekData={weeksArray[displayingWeekVar]}></Week>
        </div>
    );
}

export default Planner;