import React, { useState, useEffect } from "react";
import API from "../../utils/API";

export default function RequestTimeModal(props) {
    // const [scheduleState, setshceduleState] = useState({
    //     monday: {
    //         day: "Monday",
    //         date: "",
    //         employees: []
    //     },
    //     tuesday: {
    //         day: "Tuesday",
    //         date: "",
    //         employees: []
    //     },
    //     wednesday: {
    //         day: "Wednesday",
    //         date: "",
    //         employees: []
    //     },
    //     thursday: {
    //         day: "Thursday",
    //         date: "",
    //         employees: []
    //     },
    //     friday: {
    //         day: "Friday",
    //         date: "",
    //         employees: []
    //     },
    //     saturday: {
    //         day: "Saturday",
    //         date: "",
    //         employees: []
    //     },
    //     sunday: {
    //         day: "Sunday",
    //         date: "",
    //         employees: []
    //     },
    //   });

    // //   useEffect(() => {
    // //     setTORState({
    // //         ...TORState,
    // //         name: props.authState.user.name
    // //     });
    // //   }, [])

    //   const handleInputChange = event => {
    //     const { name, value } = event.target;
    //     setTORState({
    //         ...TORState,
    //         [name]: value.trim()
    //     });
    // };

    // const handleDropDown = e => {
    //     const { name, value } = e.target;
    //     setTORState({
    //         ...TORState,
    //         [name]: value
    //     })
    // }

    // const handleSubmit = () => {
    //     API.postTimeOff(TORState)
    //     .then(response => {
    //         console.log(response);
    //         window.location.reload();
    //     })
    // }

    return (
        <div>
            <button className="btn btn-dark" type="button" title="Update Schedule" data-toggle="modal" data-target="#scheduleModal">Update Schedule</button>
            <div className="modal" id="scheduleModal" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Update Schedule</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Type</label>
                                    <label class="col-sm-2 col-form-label">Shift</label>
                                    <div class="col-sm-4">
                                        <input type="text" class="form-control" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}