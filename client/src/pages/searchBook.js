import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";
import { Container, Row, Col } from "../components/Grid";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

class SearchBooks extends Component {
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

    handleInputChange = e => {
        this.setState({ search: e.target.value })
    }

    handleFormSubmit = e => {
        e.preventDefault();

        API.getGoogleBook(this.state.search).then(res => {
            if (res.data.items === "error") {
                throw new Error(res.data.items);
            } else {
                let results = res.data.items;
                results = results.map(result => {
                    result = {
                        key: result.id,
                        id: result.id,
                        title: result.volumeInfo.title,
                        author: result.volumeInfo.authors,
                        description: result.volumeInfo.description,
                        image: result.volumeInfo.imageLinks.thumbnail,
                        link: result.volumeInfo.infoLink
                    }
                    return result;
                })
                this.setState({ books: results, error: "" })
            }
        }).catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = e => {
        e.preventDefault();
        let savedBooks = this.state.books.filter(book => book.id === e.target.id);
        savedBooks = savedBooks[0];
        API.saveBook(savedBooks).then(this.setState({ message: MySwal.fire({
            title: <p>Your book has been saved :)</p>,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          })})).catch(err => console.log(err))
    }

    render() {
        return(
            <Container fluid>
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchForm handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange} />
                        </Col>
                    </Row>
                </Container>
                <br />
                <Container>
                    <SearchResult
                    books={this.state.books}
                    handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
        )
    }
}

export default SearchBooks;