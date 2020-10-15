import React from "react";
import API from "../../utils/API";

export default function EmployeeCard(props) {

    const deleteEmployee = () => {
        API.deleteEmployee(props.id)
            .then(result => {
                alert("employee deleted")
                window.location.reload()
            })
    }

    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{props.username}</h6>
                    <p class="card-text">{props.email}</p>
                    <button className="btn btn-danger" onClick={deleteEmployee}>X</button>
                </div>
            </div>
        </div>
    )
}