import axios from "axios";
require("dotenv").config();

//If using Express for API endpoints

export default {
  // Gets all items
  getMenu: function() {
    return axios.get("/api/itemdetails");
  },
  // Gets the item with the given id
  getBook: function(id) {
    return axios.get("/api/itemdetails/" + id);
  },
  // Deletes the item  with the given id
  deleteBook: function(id) {
    return axios.delete("/api/itemdetails/" + id);
  }
};
