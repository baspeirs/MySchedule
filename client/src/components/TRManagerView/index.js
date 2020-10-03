import React from "react";

export default function TRManagerView(props) {
  return (
    <tbody>
      <tr>
        <th scope="row">{props.type}</th>
        <td>{props.name}</td>
        <td>{props.shift}</td>
      </tr>
    </tbody>
  )
}