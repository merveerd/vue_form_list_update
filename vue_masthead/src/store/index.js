import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import mastheadList from "./mastheadList";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    mastheadList
  }
});
