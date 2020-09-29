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
        // arrays to store employees by type
        let managerArr = [];
        let driverArr = [];
        let inshopArr = [];
        // loop to push employees to proper array
        props.employees.forEach(employee => {
            if (employee.type === "Manager") { managerArr.push(employee) }
            else if (employee.type === "Driver") driverArr.push(employee)
            else if (employee.type === "Inshop") inshopArr.push(employee)
            else console.log("employee issue, fix things");
            // set state with the employee arrays
            setEmployeeState({
                managers: managerArr,
                drivers: driverArr,
                inshops: inshopArr
            });
        });
    }, [])
    return (
        <div className="col-lg-3">
            <table className="table table-striped table-dark">
                <TableHead day={props.day} />

                {/* creates a table row for the manager section */}
                <h4>Manager</h4>
                {employeeState.managers.map(manager => (
                    <ManagerTableRow manager={manager}/>
                ))}

                {/* creates a table row for the in shop section */}
                <h4>In-Shop</h4>
                {employeeState.inshops.map(inshop => (
                    <InShopTableRow inshop={inshop}/>
                ))}

                {/* creates a table row for the driver section */}
                <h4>Driver</h4>
                {employeeState.drivers.map(driver => (
                <DriverTableRow driver={driver}/>
                ))}
            </table>
        </div>
    )
}