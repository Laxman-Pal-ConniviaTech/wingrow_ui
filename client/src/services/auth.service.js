import axios from "axios";
import authHeader from "./auth.headers";

const{REACT_APP_API_ENDPOINT}=process.env;

// const API_URL = "https://wingrowagritech.herokuapp.com/auth/";
// const API_URL = "http://localhost:4000/auth/"; 
// const API_URL = `${REACT_APP_API_ENDPOINT}/auth/`;
const API_URL = "http://localhost:4000/auth/";

const register = (
  phone,
  password,
  firstname,
  lastname,
  type,
  farmertype,
  address,
  tags
) => {
  return axios.post(API_URL + "signup", {
    phone,
    password,
    firstname,
    lastname,
    type,
    farmertype,
    address,
    tags,
  });
};

const login = (phone, password) => {
  return axios.post(API_URL + "signin", {
      phone,
      password,
    }).then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const addAddress = (address) => {
  return axios
    .post(API_URL + "address", { address }, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const addimage = (formData) => {
  return axios
    .put(API_URL + "image", formData, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const feedback = (message , stars) => {
  return axios.post(API_URL + "feedback", {
    stars,
    message
  });
};

const newpassword = (phone, password) => {
  return axios.post(API_URL + "newpassword", {
    phone,
    password,
  });
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  addAddress,
  addimage,
  feedback,
  newpassword,
};

export default AuthService;
