import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`
  //   transformResponse: [function (data) {
  //   // Do whatever you want to transform the data
  //   console.log(JSON.parse(data))
  //   return JSON.parse(data);
  // }],

  })
}
