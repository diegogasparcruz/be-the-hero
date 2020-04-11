import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "logon",
    component: () => import("../pages/Logon/Logon.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../pages/Register/Register.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../pages/Profile/Profile.vue")
  },
  {
    path: "/incidents/new",
    name: "newIncidents",
    component: () => import("../pages/NewIncident/NewIncidents.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
