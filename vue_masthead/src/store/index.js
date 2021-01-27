import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import masthead from "./masthead";
import mastheadList from "./mastheadList";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    masthead,
    mastheadList
  }
});
