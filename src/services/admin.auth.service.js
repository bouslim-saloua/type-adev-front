import axios from "axios";
const API_URL = "http://localhost:8090/api/admin/auth/";

const register = (nom, prenom, telephone, email, password) => {
    return axios.post(API_URL + "signup", {
      nom,
      prenom,
      telephone,
      email,
      password,
    });
  };
  const login = (email, password) => {
    return axios
      .post(API_URL + "signin", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.email) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  };
  const logout = () => {
    localStorage.removeItem("user");
    axios.post(API_URL + "signout").then((response) => {
      return response.data;
    });
  };
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  const AdminAuthService = {
    register,
    login,
    logout,
    getCurrentUser,
  }

export default  AdminAuthService;