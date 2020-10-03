import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";

export default function ManagerOperations(props) {
    return (
        <div>
            <NavBar logout={props.logout} authState={props.authState} />
            <div className="container">
                <div className="row">
                    <button className="col-3 btn btn-dark" type="button">Employee Directory</button>
                    <a className="col-4" href="/changeschedule"><button className="btn btn-dark">Change Schedule</button></a>
                    <button className="col-3 btn btn-dark" type="button">Add Employee</button>
                </div>
            </div>
        </div>
    )
}