import React from "react";
import Table from "../../components/Table";
import NavBar from "../../components/NavBar";

export default function Schedule(props) {
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
            <NavBar logout={props.logout}/>
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