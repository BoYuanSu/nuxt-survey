import {v4 as uuidv4}  from 'uuid'

export const state = () => {
    return {
      message: "b module hello"
    };
  };

  export const getters = {}

  export const mutations = {
    SET_MESSAGE_B(state, value) {
      state.message = value;
    }
  };

  export const actions = {}
