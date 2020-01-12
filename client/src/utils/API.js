import axios from "axios"

export default {
    getGoogleBook: query => {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    getBooks: () => {
        return axios.get("/api/books");
    },

    getBook: id => {
        return axios.get("/api/books/" + id);
    },

    saveBook: savedBooks => {
        return axios.post("/api/books/", savedBooks);
    },

    deleteBook: id => {
        return axios.delete("/api/books/" + id);
    }
}