export const state = () => {
  return {
    message: 'a/index.js hello'
  }
}

export const getters = {}

export const mutations = {
  A_INDEX_SET_MESSAGE (state, value) {
    state.message = value
  }
}

export const actions = {}
