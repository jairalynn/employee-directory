import React from "react";
import TableData from "./TableData";

function Table(props) {
    return (
        <table className="table table-striped table-hover table-fluid">
            <thead>
                <tr>
                    <th scope="col">Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <TableData results={props.results} key={props.phone}
            />
        </table>
    )
}
export default Table;