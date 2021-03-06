import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyBWsA8RHU9y0eT8MZC26TEo0XetYl3u4ok";

export default {
  viewBooks: function(searchTerm) {
    return new Promise((resolve, reject) => {
      axios
        .get(BASEURL + searchTerm + APIKEY)
        .then(res => {
          console.log(res)
          const apiBooks = res.data.items;
          const bookData = apiBooks.map(book => {
            const { imageLinks = null } = book.volumeInfo
            const thumbnail = imageLinks ? imageLinks.thumbnail : null
            return {
              id: book.id,
              title: book.volumeInfo.title,
              authors: book.volumeInfo.authors,
              description: book.volumeInfo.description,
              image: thumbnail,
              link: book.volumeInfo.previewLink
            };
          });
          console.log(bookData);
          resolve(bookData);
        })
        .catch(err => reject(err));
    });
  },
  
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
