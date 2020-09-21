import React from "react";
import NavBar from "../../components/NavBar";
import RequestTimeModal from "../../components/RequestTimeModal";

export default function TimeOff() {
    return(
        <div>
            <NavBar />
            <h1>Time Off Requests</h1>
            <RequestTimeModal />
        </div>
    )
}