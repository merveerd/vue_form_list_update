import Home from "./screens/Home";
import Masthead from "./screens/AddMasthead";

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/masthead",
    name: "masthead",
    component: Masthead
  },
  { path: "*", redirect: "/" }
];

export default new VueRouter({
  routes,
  mode: "history" //no hastag in url
});
