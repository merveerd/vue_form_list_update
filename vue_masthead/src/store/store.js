import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "var",
    submitted: false
  },
  mutations: {
    isSubmitted(state) {
      // mutate state
      state.submitted = true;
    }
  },
  actions: {
    isSubmitted(context) {
      context.commit("submit");
    }
  }
});
