import React, { useState, useEffect } from "react";
import DriverTableRow from "../DriverTableRow";
import TableHead from "../TableHead";
import ManagerTableRow from "../ManagerTableRow";
import InShopTableRow from "../InShopTableRow";

export default function Table(props) {
    const [employeeState, setEmployeeState] = useState({
        managers: [],
        drivers: [],
        inshops: []
    })

    useEffect(() => {
        let managerArr = [];
        let driverArr = [];
        let inshopArr = [];
        props.employees.forEach(employee => {
            if (employee.type === "Manager") { managerArr.push(employee) }
            else if (employee.type === "Driver") driverArr.push(employee)
            else if (employee.type === "Inshop") inshopArr.push(employee)
            else console.log("employee issue, fix things");
            setEmployeeState({
                managers: managerArr,
                drivers: driverArr,
                inshops: inshopArr
            });
        });
    }, [])
    const test = () => {
        console.log(props)
        console.log(employeeState)
    }
    return (
        <div className="col-lg-3">
            <button onClick={test}>click me</button>
            <table className="table table-striped table-dark">
                <TableHead day={props.day} />
                <h4>Manager</h4>
                {employeeState.managers.map(manager => (
                    <ManagerTableRow manager={manager}/>
                ))}
                <h4>In-Shop</h4>
                {employeeState.inshops.map(inshop => (
                    <InShopTableRow inshop={inshop}/>
                ))}
                <h4>Driver</h4>
                {employeeState.drivers.map(driver => (
                <DriverTableRow driver={driver}/>
                ))}
            </table>
        </div>
    )
}