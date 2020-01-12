import React from "react";
import "./form.css";

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="BookSearchLabel"><h3>Search for Book</h3></label>
                <br />
                <input className="col-12 form-control" value={props.search} type="text" name="searchBook" placeholder="Type your book here" onChange={props.handleInputChange} />
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>Submit</button>
        </form>
    )
}

export default SearchForm;