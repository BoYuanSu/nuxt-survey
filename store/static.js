import { v4 as uuidv4 } from 'uuid'

export const state = () => {
  return {
    message: ''
  }
}

export const getters = {}

export const mutations = {
  B_SET_MESSAGE (state, value) {
    state.message = value
  }
}

export const actions = {
  GET_UUID ({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const s = uuidv4()
        commit('B_SET_MESSAGE', s)
        resolve(s)
      }, 1000)
    })
  }
}
