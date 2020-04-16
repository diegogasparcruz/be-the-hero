import Vue from "vue";
import Vuex from "vuex";
import { ongs, incidents } from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ongs,
    incidents
  }
});
