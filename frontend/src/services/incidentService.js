import api from "./api";

const token = localStorage.getItem("ongId");

const logout = () => {
  localStorage.clear();
};

const save = incident => {
  return api.post("incidents", incident, {
    headers: {
      Authorization: token
    }
  });
};

const getAll = () => {
  return api.get("profile", {
    headers: {
      Authorization: token
    }
  });
};

const del = id => {
  return api.delete(`incidents/${id}`, {
    headers: {
      Authorization: token
    }
  });
};

export default {
  save,
  logout,
  getAll,
  del
};
