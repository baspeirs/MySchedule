import React from "react";
import API from "../../utils/API";


export default function TimeOffCard(props) {
    const claimShift = () => {
        console.log(props.authState.user.name)
        API.claimTimeOff(props.id, { user: props.authState.user._id })
            .then(result => {
                console.log(result)
            })
            .catch(err => console.log(err))
    }

    if (!props.users[1]) {
        return (
            <div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <h5 className="card-title col-9">{props.name}</h5>
                                <button className="col-3">Delete</button>
                            </div>
                            <div className="row">
                                <p className="col-lg-6">{props.type}</p>
                                <p className="card-text col-lg-6">{props.shift} {props.day}</p>
                            </div>
                            <a href="#" className="btn btn-primary" onClick={claimShift}>Claim Shift</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if (props.users[1]) {
        return (
            <div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <h5 className="card-title col-9">{props.name}</h5>
                                <button className="col-3">Delete</button>
                            </div>
                            <div className="row">
                                <p className="col-lg-6">{props.type}</p>
                                <p className="card-text col-lg-6">{props.shift} {props.day}</p>
                            </div>
                            <p className="btn btn-success">Shift claimed by: {props.users[1]}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}