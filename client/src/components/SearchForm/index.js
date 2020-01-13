import React from "react";
import "./form.css";

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="BookSearchLabel text-center"><h3>Search for Books</h3></label>
                <br />
                <input className="col-12 form-control" value={props.search} type="text" name="searchBook" placeholder="Type your book here" onChange={props.handleInputChange} />
            </div>
            <button type="submit" className="submitBtn btn btn-outline-light" onClick={props.handleFormSubmit}><i className="fas fa-check"></i> Get books</button>
        </form>
    )
}

export default SearchForm;