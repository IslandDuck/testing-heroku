import axios from 'axios'
import store from '@/store'

export default () => {
  return axios.create({
    // baseURL: `http://localhost:8081/`
    baseURL: `https://tab-tracker-demo.herokuapp.com/`, // <-- url copied from `heroku create ...` command
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
