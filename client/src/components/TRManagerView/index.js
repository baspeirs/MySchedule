import React, {useState, useEffect} from "react";
import API from "../../utils/API";

export default function TRManagerView(props) {
  const [employeeState, setEmployeeState] = useState({
    id: "",
    name: "",
    type: "",
    shift: "",
    day: ""
  });

  useEffect(() => {
    setEmployeeState({
      id: props.id,
      name: props.name,
      type: props.type,
      shift: props.shift,
      day: props.day
    });
  }, [])

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEmployeeState({
        ...employeeState,
        [name]: value.trim()
    });
};

  const handleShiftUpdate = () => {
    API.updateShift(props.scheduleId, employeeState)
      .then(result => {
        console.log(result)
      })
      .catch(err => console.log(err))
  }

  const test = () => {
    console.log(props)
  }
  return (
    <tbody>
      <tr>
        <th scope="row">{props.type}</th>
        <td><input type="text" class="form-control" value={employeeState.name} name="name" onChange={handleInputChange}/></td>
        <td><input type="text" class="form-control" value={employeeState.shift} name="shift" onChange={handleInputChange}/></td>
        <button className="btn btn-dark" onClick={handleShiftUpdate}>Click me</button>
      </tr>
    </tbody>
  )
}