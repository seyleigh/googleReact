import React from "react";
import "../styles/search.css";
import { Row, Col } from "../Grid";

const SearchResult = props => {
    return (props.books.length === 0) ? (
        <div className="card">
            <div className="card-body">
                <div className="article">
                    <h2 className="text-center text-white">Search Results</h2>
                </div>
            </div>
        </div>
    ) : (
        <div className="card">
            <div className="card-body">
                <div className="article">
                    <h2 className="text-white text-center">Search Results</h2>
                    {props.books.map(book => {
                        return (
                            <li className="searchList list-group-item">
                                <Row className="row" id={book.title + "Card"} key={book._id}>
                                    <Col size="2" className="bookImage">
                                        <img src={book.image} alt={book.title} />
                                    </Col>
                                    <Col size="9">
                                        <Row>
                                            <h3>{book.title}</h3>
                                        </Row>
                                        <Row>
                                            <h4>{book.author}</h4>
                                        </Row>
                                        <Row>
                                            <p>{book.description}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br />
                                <Row className="btnDiv center-align">
                                    <button className="saveBook btn btn-outline-light" id={book.id} onClick={(e) => props.handleSavedButton(e)}><i className="fas fa-save"></i></button>
                                    <a href={book.link} target="_blank" rel="noopener noreferrer">
                                        <button className="viewBook btn btn-outline-light"><i className="fab fa-google"></i></button>
                                    </a>
                                </Row>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchResult;