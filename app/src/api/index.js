// import util from '../util'
import Vue from 'vue'
import { Promise } from 'es6-promise'

const api = {

}

api.example = (panoId) => {
  return new Promise((resolve, reject) => {
    const URLEnd = ''
    Vue.http.get(api.serverURL + URLEnd).then(resp => {
      const data = resp.data
      resolve(data)
    }, err => {
      console.log('error: ', err)
      reject(err)
    })
  })
}

export default api
