import axios from "axios";

export default {
  // logs in user
  login: function(loginInfo) {
    return axios.post("/api/users/login", loginInfo);
  },

  // signs up user, then logs them in
  signup: function(signupInfo) {
    return axios.post("/api/users/signup", signupInfo);
  },

  // checks to see if user is logged in, then returns the user
  isLoggedIn: function() {
    return axios.get("/api/users/profile");
  },

  // checks to see if the user is logged in and and admin, then returns the user
  isAdmin: function() {
    return axios.get("/api/users/logout")
  },

  // logs out the user
  logout: function() {
    return axios.get("/api/users/logout")
  },

  getHaves: function(){
    return axios.get("/api/haves")
  },

  getHavesById: function(id){
    return axios.get("/api/haves/" + id)
  },
  getWantsById: function(id){
    return axios.get("/api/wants/" + id)
  },
  createHaves: function(data){
    return axios.post("/api/haves/new", data)

  },
  getWants: function(){
    return axios.get("/api/wants")
  },
  createWant: function(data){
    return axios.post("/api/wants/new", data)

  },
  // Deletes the haves with the given id
  deleteHave: function(id) {
    return axios.delete("/api/haves/" + id);
  },

  // Deletes the wants with the given id
  deleteWant: function(id) {
    return axios.delete("/api/wants/" + id);
  },

};