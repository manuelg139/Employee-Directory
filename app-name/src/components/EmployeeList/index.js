import React from "react";


function EmployeeList(props) {
  return (
    <table>
      <caption> Current Employees </caption>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Full Name</th>
          <th>Phone No</th>
          <th>Email</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {props.result.map(employee => (
          <tr key={employee.id}>
            <td> <img src={employee.picture.thumbnail} alt="Thumbnail"/> </td>
            <td>{employee.name.first}{employee.name.last}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;