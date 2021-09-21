import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.REACT_APP_HOST,

  validateStatus: function (status) {
    return (status >= 200 && status < 300) || status === 400
  },
})
