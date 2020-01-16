import React from "react";
import "../styles/form.css";

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="BookSearchLabel text-center"><h1>Search for Books</h1></label>
                <br />
                <input className="col-12 form-control" value={props.search} type="text" name="searchBook" required placeholder="Type your book here" onChange={props.handleInputChange} />
            </div>
            <button type="submit" className="submitBtn btn btn-outline-light" onClick={props.handleFormSubmit}><i className="fas fa-check"></i> Get books</button>
        </form>
    )
}

export default SearchForm;