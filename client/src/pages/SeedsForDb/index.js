import React from "react";
import API from "../../utils/API";

export default function SeedsForDb() {
    const userSeed = () => {
        API.seedDefaultUser()
    }

    const scheduleSeed = () => {
        API.seedDefaultSchedule()
    }

    return(
        <div>
            <button onClick={userSeed}>Seed the default user</button>
            <button onClick={scheduleSeed}>Seed the default schedule</button>
        </div>
    )
}