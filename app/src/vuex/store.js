import Vue from 'vue'
import Vuex from 'vuex'
// import api from '../api'

Vue.use(Vuex)

const state = {
  exampleObj: {}
}

const mutations = {
  SET_EXAMPLE_OBJ (state, exampleObj) {
    state.exampleObj = exampleObj
  }
}

export default new Vuex.Store({
  state,
  mutations
})
