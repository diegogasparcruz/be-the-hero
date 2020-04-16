import api from "./api";

const logon = id => {
  return api.post("sessions", { id });
};

const save = ong => {
  return api.post("ongs", ong);
};

export default {
  logon,
  save
};
