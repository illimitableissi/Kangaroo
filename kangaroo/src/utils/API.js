import axios from "axios";

export default {
getListings: function(){
    return axios.get("/api/listings")
},

getListing: function(location){
    return axios.get("/api/listings?location=" + location);
},

getId: function(id) {
    return axios.get("/api/listings/" + id);
},

contact: function(id, messageData) {
    return axios.post("/api/listings/" + id, messageData);
},

contactLister: function({ id, messageData }) {
    return axios.post("/api/listings/location/" + id + "/submit", messageData)
},

createListing: function(listingData) {
    return axios.post("/api/listings", listingData);

}
    
};