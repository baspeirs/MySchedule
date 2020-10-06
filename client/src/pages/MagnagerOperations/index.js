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
                    <button className="col-3 btn btn-dark" type="button" title="Create Post" data-toggle="modal" data-target="#requestModal">Add Employee</button>
                </div>
                <div className="modal" id="requestModal" tabindex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">New Employee Info</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Username</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" name="shift" ></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">First and Last Name</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" name="shift" ></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Email</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" name="shift" ></textarea>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                        <label class="form-check-label" for="exampleRadios1">Default radio</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label class="form-check-label" for="exampleRadios2">Second default radio</label>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" >Add Employee</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}