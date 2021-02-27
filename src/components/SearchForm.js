import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div>
                <input onChange={props.handleInputChange} name="search" type="text" className="form-control" id="search"/>
                <hr></hr>
                <button onClick={props.handleFormSubmit} className="btn btn-primary">
                    Search
                </button>
            </div>
        </form>
    );
}

export default SearchForm;