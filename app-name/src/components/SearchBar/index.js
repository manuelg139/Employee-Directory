import React from "react";

function SearchBar(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="Search By First Name, Last Name or Email"
          type="text"
          className="form-control col mx-auto w-60 text-center"
          placeholder="Search By First Name, Last Name or Email"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchBar;