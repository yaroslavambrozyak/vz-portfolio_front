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
  },

  postArt(data, files) {
    let formData = new FormData();
    formData.append('data', JSON.stringify(data));
    for (let i = 0; i < files.length; i++) {
      formData.append(`files`, files[i])
    }
    return instance({
      method: 'post',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
      url: '/arts'
    }).then(r => {
      return r.data;
    })
  }
}

