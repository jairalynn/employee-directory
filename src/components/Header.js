/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import SearchForm from "./SearchForm";

function Header(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <h1>Employee Directory</h1>
            <p className="text">Click field name to sort or use the search box to narrow your results.</p>
            <SearchForm handleInputChange={props.handleInputChange}
                handleInputChange={props.handleInputChange} />
        </div>
    );
}

export default Header