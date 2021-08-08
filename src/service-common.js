import axios from "axios";

export default axios.create({
  baseURL: "https://www.wecasa.fr/api/techtest",
  headers: {
    "Content-type": "application/json"
  }
});