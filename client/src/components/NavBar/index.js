import { PromiseProvider } from "mongoose";
import React from "react";

export default function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Welcome User!</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Schedule</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/timeoff">Time Off</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/changeschedule">Update Schedule (manager only)</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={props.logout}>Log Out</a>
                    </li>
                </ul>
                <span className="navbar-text">
                    Jimmy Johns store #____
    </span>
            </div>
        </nav>
    )
}