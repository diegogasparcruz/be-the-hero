import { ongService } from "../../services";
import { getField, updateField } from "vuex-map-fields";

const state = {
  ongId: "",
  ong: {
    name: "",
    email: "",
    whatsapp: "",
    city: "",
    uf: ""
  },
  error: ""
};

const getters = {
  getField
};

const actions = {
  handleLogon({ state, commit }) {
    if (state.ongId === null) {
      commit("setError", "Informe seu ID");
      alert(state.error);
    } else {
      return ongService
        .logon(state.ongId)
        .then(response => {
          localStorage.setItem("ongId", state.ongId);
          localStorage.setItem("ongName", response.data.name);
          window.location = "/profile";
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  handleRegister({ state, commit }) {
    if (
      state.ong.name === "" ||
      state.ong.email === "" ||
      state.ong.whatsapp === "" ||
      state.ong.city === "" ||
      state.ong.uf === ""
    ) {
      commit("setError", "Informe todos os dados!");
      alert(state.error);
    } else {
      return ongService
        .save(state.ong)
        .then(response => {
          alert(`Seu ID de acesso: ${response.data.id}`);
          window.location = "/";
        })
        .catch(err => {
          console.log(err);
          commit("setError", "Erro no cadastro, tente novamente.");
          alert(state.error);
        });
    }
  }
};

const mutations = {
  updateField,
  setError(state, payload) {
    state.error = payload;
  },
  setProduct(state, payload) {
    state.ong = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
