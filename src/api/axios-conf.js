import axios from "axios";


export default axios.create({
    //baseURL: "http://ec2-100-25-196-44.compute-1.amazonaws.com:8080/api",
    baseURL: "http://localhost:8080/api",
    responseType: "json"
  });
