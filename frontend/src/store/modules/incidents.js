import { incidentService } from "../../services";
import { getField, updateField } from "vuex-map-fields";

const state = {
  incidents: [],
  incident: {
    title: "",
    description: "",
    value: ""
  },
  error: ""
};

const getters = {
  getField
};

const actions = {
  loadIncidents({ commit }) {
    return incidentService.getAll().then(response => {
      commit("setIncidents", response.data);
    });
  },
  handleRegister({state, commit}){
    if(state.incident.title === "" ||
      state.incident.description === "" ||
      state.incident.value === "") {
        commit("setError", "Preencha todos os campos");
        alert(state.error);
      } else {
        return incidentService.save(state.incident).then(response => {
          console.log(response);
          window.location = "/profile";
        });
      }
  },
  handleDeleteIncident({ state, commit }, payload) {
    return incidentService.del(payload).then(response => {
      console.log(response);
      commit("setIncidents", state.incidents.filter(incident => incident.id !== payload));
    });
  },
  handleLogout() {
    incidentService.logout();
    window.location = "/";
  },
};

const mutations = {
  updateField,
  setError(state, payload) {
    state.error = payload;
  },
  setIncidents(state, payload) {
    state.incidents = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
