import React, {useState, useEffect} from "react";
import Table from "../../components/Table";
import NavBar from "../../components/NavBar";
import API from "../../utils/API";

export default function Schedule(props) {
    const [schedule, setSchedule] = useState({
        days: []
    })

    useEffect(() => {
        API.getSchedule()
            .then(result => {
                result.data[0].days.forEach(element => {
                    let dayObj = {
                        day: element.day,
                        employees: element.employees
                    };
                    console.log(dayObj);
                    schedule.days.push(dayObj)
                })
            })
            .catch(err => console.log(err))
    }, [])

    const test = () => {
        console.log(schedule.days)
    }
    const days = [
        "Mon.",
        "Tues.",
        "Wed.",
        "Thurs.",
        "Fri.",
        "Sat.",
        "Sun."
    ]
    return (
        <div>
            <NavBar logout={props.logout} authState={props.authState}/>
            <button onClick={test}>click me</button>
            <div className="container">
                <div className="row">
                    <h1 className="col-lg-6">Welcome!</h1>
                </div>
                <div className="row">
                    {days.map(day => (
                        <Table day={day} />
                    ))}
                </div>
            </div>
        </div>
    )
}