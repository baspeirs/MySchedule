import React from "react";

export default function TimeOffCard(props) {
    return (
        <div>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{props.name}</h5>
                        <p>{props.type}</p>
                        <p class="card-text">{props.shift} {props.day}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}