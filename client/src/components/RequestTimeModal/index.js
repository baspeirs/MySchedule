import React from "react";

export default function RequestTimeModal() {
    return (
        <div>
            <button type="button" className="modalBtn btn" title="Create Post" data-toggle="modal" data-target="#requestModal">
                <button>Request Time Off</button>
            </button>
            <div className="modal" id="requestModal" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Time Off Details</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Select Day</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Monday</option>
                                        <option>Tuesday</option>
                                        <option>Wednesday</option>
                                        <option>Thursday</option>
                                        <option>Friday</option>
                                        <option>Saturday</option>
                                        <option>Sunday</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Type</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>In-Shop</option>
                                        <option>Driver</option>
                                        <option>Manager</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Hours</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
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