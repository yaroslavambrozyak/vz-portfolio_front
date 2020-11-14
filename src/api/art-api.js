import { getPrevArt } from '../redux/art-reducer';
import axios from './axios-conf';


export const artsApi = {
  getArtsByCategoryAndType(category, type) {
    let url = category && type ? `/arts/${category}/${type}` : '/arts'
    return axios.get(url)
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
    formData.append('data', new Blob([JSON.stringify(data)], {
      type: "application/json"
    }));
    for (let i = 0; i < files.length; i++) {
      formData.append(`files`, files[i])
    }
    return axios({
      method: 'post',
      data: formData,
      headers: { 'Content-Type': undefined },
      url: '/arts'
    }).then(r => {
      return r.data;
    })
  },

  postArtPositions(orderedArtIdList) {
    return axios.put('/arts/order', { orderedArts: orderedArtIdList });
  },

  getNextArt(artId){
    return axios.get(`/arts/${artId}/next`)
  },

  getPrevArt(artId){
    return axios.get(`/arts/${artId}/prev`);
  }
}


