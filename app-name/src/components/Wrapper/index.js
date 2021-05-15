import React, { Component } from "react";
import API from "../../utils/API";
import SearchBar from "../SearchBar";
import EmployeeList from "../../components/EmployeeList";



class Wrapper extends Component {
    state = {
        result: [],
      };
    
      componentDidMount() {
        API.search()
          .then(res => this.setState({ 
            result: res.data.results,
            filteredUser: res.data.results
           }))
          .catch(err => console.log(err));
      };
    
      handleInputChange = event => {
        event.preventDefault();
      };
    
      render() {
        return (
        <div>   
            <SearchBar search={this.state.search} handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}/>
            <EmployeeList result={this.state.result} />
        
        </div>
        );
      }
    }
export default Wrapper;
