import React, {useState, useEffect} from "react";
import UpdateScheduleModal from "../../components/UpdateScheduleModal";
import Navbar from "../../components/NavBar";
import API from "../../utils/API";
import ScheduleManagerView from "../../components/ScheduleManagerView";

export default function ChangeSchedule(props) {
    const [schedule, setSchedule] = useState({
        days: []
    })

    useEffect(() => {
        let dayHolder = []
        API.getSchedule()
            .then(result => {
                console.log(result)
                result.data[0].days.forEach(element => {
                    let dayObj = {
                        day: element.day,
                        employees: element.employees
                    };
                    dayHolder.push(dayObj);
                    setSchedule({
                        days: dayHolder
                    })
                })
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <Navbar logout={props.logout} authState={props.authState}/>
            <div className="container">
                <div className="row">
                    {schedule.days.map(day => (
                        <ScheduleManagerView 
                        day={day.day}
                        employees={day.employees} 
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}