import axios from "axios";
require('dotenv').config();

export default {
  // Gets all items
  getMenu: function() {
    return axios.get(process.env.FIREBASE_API + "menu/item.json");
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