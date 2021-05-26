import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  uuid: ""
});

export const getters = {};

export const mutations = {
  SET_UUID(state, payload) {
    state.uuid = payload;
  }
};

export const actions = {
  GET_UUID({ commit }) {
    return new Promise(resolve => {
      setTimeout(() => {
        let uuid = uuidv4();
        commit("SET_UUID", uuid);
        resolve(uuid);
      }, 100);
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
