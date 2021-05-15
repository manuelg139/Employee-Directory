import React from "react";


function EmployeeList(props) {
  
  const data = props.EmployeeList;
  

  return (
    <table className="col mx-auto w-60 text-center">
      <caption> Employees </caption>
      <thead>
        <tr className="text-center align-middle">
          <th>Photo</th>
          <th >First Name</th>
          <th onClick={e => props.sortBy(e, 'name.last')}> Last Name
          <span class={props.nameSort=== 'ascending' ? 'headerSortDown' : 'headerSortUp'}>  </span></th>
          <th onClick={e => props.sortBy(e, 'phone')}> Phone
          <span class={props.phoneSort=== 'ascending' ? 'headerSortDown' : 'headerSortUp'}>  </span></th>
          <th onClick={e => props.sortBy(e, 'email')} >Email
          <span class={props.emailSort=== 'ascending' ? 'headerSortDown' : 'headerSortUp'}>  
          </span>
          </th>
   
        </tr>
      </thead>
      <tbody>
        {data.map(employee => (
          <tr key={employee.id.value == null ? Math.random() : employee.id.value}>
            <td> <img src={employee.picture.medium} alt="Thumb image"/> </td>
            <td>{employee.name.first} </td>
            <td>{employee.name.last}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default EmployeeList;
