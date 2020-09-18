import React from "react";

export default function TableHead(props) {
    return (
        <thead>
            <tr>
                <th scope="col"><h2>{props.day}</h2></th>
            </tr>
        </thead>
    )
}