export const state = () => {
  return {
    message: 'root state hello'
  }
}

export const getters = {}

export const mutations = {
  SET_MESSAGE (state, value) {
    state.message = value
  }
}

export const actions = {
  nuxtServerInit ({ commit }, payload) {
    console.log('🚀 ~ nuxtServerInit')
  }
}
