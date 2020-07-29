import Vue from "vue";
import Vuex from "vuex";

import cars from "./modules/cars/index.js";
import car from "./modules/car/index.js";

import state from "./state.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cars,
    car
  },
  namespaced: true,
  state,
  mutations,
  actions
});
