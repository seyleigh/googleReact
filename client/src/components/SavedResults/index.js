import React from "react";
import "./saved.css";
import { Row, Col } from "../Grid";

const SavedResult = props => {
    return (props.savedBooks.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                     <h1 className="text-center text-white">Books You've saved.</h1>
                </div>
            </div>
        </div>
    ) : (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h1 className="text-center text-white display-4">Books You've saved.</h1>
                    {props.savedBooks.map(savedbook => {
                        return (
                            <li className="saved-list list-group-item">
                                <Row className="SearchResult" id={savedbook.title + "Card"} key={savedbook.id}>
                                    <Col size="2" className="bookImage">
                                        <img src={savedbook.image} alt={savedbook.title} />
                                    </Col>
                                    <Col size="9" className=" bookInfo">
                                        <Row>
                                            <h4 className="bookTitle">{savedbook.title}</h4>
                                        </Row>
                                        <Row>
                                            <h5 className="bookAuthor">{savedbook.author}</h5>
                                        </Row>
                                        <Row>
                                            <p className="bookDescription">{savedbook.description}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br />
                                {/* <Row className="buttonDiv"> */}
                                    <button className="deleteBook btn btn-outline-dark" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)}>
                                    <i className="fas fa-skull"></i>
                                    </button>
                                    <a href={savedbook.link} target="_blank" rel="noopener noreferrer">
                                        <button className="view btn btn-outline-dark"><i className="fab fa-google"></i></button>
                                    </a>
                                {/* </Row> */}
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default SavedResult;