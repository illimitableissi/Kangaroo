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
    
};