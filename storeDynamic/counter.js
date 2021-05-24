export const state = () => ({
  count: 0
});

export const getters = {};

export const mutations = {
  SET_COUNT(state, payload) {
    state.count = payload;
  }
};

export const actions = {
  GET_COUNT({ commit }) {
    return new Promise(resolve => {
      setTimeout(() => {
        let count = (Math.random() * 10) >> 0;
        commit("SET_COUNT", count);
        resolve(count);
      }, 1500);
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
