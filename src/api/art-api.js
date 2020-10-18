import axios from './axios-conf';


export const artsApi = {
  getArtsByCategoryAndType(category, type) {
    return axios.get(`/arts/${category}/${type}`)
      .then(response => {
        return response.data;
      })
  },

  getArt(artId) {
    return axios.get(`/arts/${artId}`)
      .then(response => {
        return response.data;
      });
  },

  postArt(data, files) {
    let formData = new FormData();
    formData.append('data', JSON.stringify(data));
    for (let i = 0; i < files.length; i++) {
      formData.append(`files`, files[i])
    }
    return axios({
      method: 'post',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
      url: '/arts'
    }).then(r => {
      return r.data;
    })
  }
}


