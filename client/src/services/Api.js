import axios from 'axios'
import store from '@/store'

export default () => {
  return axios.create({
    baseURL: `${__API_URL__}`,
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  //   transformResponse: [function (data) {
  //   // Do whatever you want to transform the data
  //   console.log(JSON.parse(data))
  //   return JSON.parse(data);
  // }],

  })
}
