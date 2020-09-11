import axios from "axios";

export default {
    saveUser: function(userData) {
        return axios.post("/api/register", userData);
      },
      login: function (user) {
        return axios.post("/api/login", user);
      },
      isAuthorized: function () {
        return axios.get("/api/authorized");
      },
      logout: function () {
        return axios.get("/api/logout");
      }
}