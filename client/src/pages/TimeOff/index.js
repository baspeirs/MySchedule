import React from "react";
import NavBar from "../../components/NavBar";
import RequestTimeModal from "../../components/RequestTimeModal";

export default function TimeOff(props) {
    return(
        <div>
            <NavBar authState={props.authState} logout={props.logout}/>
            <h1>Time Off Requests</h1>
            <RequestTimeModal authState={props.authState}/>
        </div>
    )
}