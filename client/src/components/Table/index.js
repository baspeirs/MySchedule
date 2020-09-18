import React from "react";
import TableRow from "../TableRow";
import TableHead from "../TableHead";

export default function Table(props) {
    return (
        <div className="col-lg-3">
            <table className="table table-striped table-dark">
                <TableHead day={props.day}/>
                <h4>Manager</h4>
                <TableRow />
                <h4>In-Shop</h4>
                <TableRow />
                <h4>Driver</h4>
                <TableRow />
                
            </table>
        </div>
    )
}