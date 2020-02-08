import axios from "axios";

export default {
getListings: function(){
    return axios.get("/api/listings")
},

getListing: function(location){
    return axios.get("/api/listings?location=" + location);
},

getPrice: function(price){
    return axios.get("/api/listings?price=" + price);
},

getId: function(id) {
    return axios.get("/api/listings/" + id);
},

contact: function(id, messageData) {
    return axios.post("/api/listings/" + id, messageData);
},

createListing: function(listingData) {
    return axios.post("/api/listings", listingData);
},

deleteListing: function(id) {
    return axios.delete("/api/listings" + id)
},

getUsers: function() {
    return axios.get("/api/users")
},

createUser: function(userData) {
    return axios.post("/api/users", userData)
}
    
};