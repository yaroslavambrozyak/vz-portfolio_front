import axios from "axios";


const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  responseType: "json"
});

export const artsApi = {
  getArtsByCategory(category) {
    return instance.get(`/arts/${category}`)
      .then(response => {
        return response.data;
      })
  }
}
