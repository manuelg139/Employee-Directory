import React, { Component } from "react";
import API from "../../utils/API";
import SearchBar from "../SearchBar";
import EmployeeList from "../../components/EmployeeList";

class Wrapper extends Component {
    state = {
        result: [],
        direction: {
          name: 'ascending',
          email: 'ascending',
          phone: 'ascending'
        },
        AllEmployees: [],
        EmployeeList: [],
      };
    
  componentDidMount() {
    API.search()
      .then(res => this.setState({ 
        AllEmployees: res.data.results,
        EmployeeList: res.data.results
       }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({ search: value });
    this.filterEmployees(value.toLowerCase().trim());
  };

  filterEmployees = (input) => {
    if (input) {
      this.setState({
        EmployeeList: this.state.AllEmployees.filter((employee) => {
          return (
            employee.name.first
              .toLowerCase()
              .concat(" ", employee.name.last.toLowerCase())
              .includes(input) ||
            employee.email
              .toLowerCase()
              .includes(input) 
          );
        }),
      });
    } else {
      this.setState({ EmployeeList: this.state.AllEmployees });
    }
  };

  sortBy = (event, key) => {
    const data = this.state.EmployeeList;
    this.setState({
      data: data.sort((a, b) => {
        const asc = this.state.direction[key] === 'ascending';
        if (a[key] < b[key]) {
            return asc ? -1 : 1;
        } else if (a[key] > b[key]) {
            return asc ? 1 : -1;
        } else {
            return 0;
        }
      }),

      direction: {
          [key]: this.state.direction[key] === 'ascending'
          ? 'descending'
          : 'ascending'
      }
    })
  }
    
      render() {
        return (
        <div>   
            <SearchBar search={this.state.search} handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}/>
                 <EmployeeList sortBy={this.sortBy} EmployeeList={this.state.EmployeeList} nameSort={this.state.direction['name.last']}  emailSort={this.state.direction['email']} phoneSort={this.state.direction['phone']}/>
        
        </div>
        );
      }
    }
export default Wrapper;
