import { FETCH_MASTHEAD } from "./actions.type";
import { SET_MASTHEAD, RESET_STATE } from "./mutations.type";

const initialState = {
  masthead: {
    name: "",
    gTag: "",
    notes: ""
  }
};
export const state = { ...initialState };

const actions = {
  async [FETCH_MASTHEAD]({ commit }, params) {
    const { data } = { data: params }; // await axios
    commit(SET_MASTHEAD, data);

    return data;
  }
};

const mutations = {
  [SET_MASTHEAD](state, masthead) {
    state.masthead = masthead;
    console.log("state", state);
  },
  [RESET_STATE]() {
    //clean the form
    for (let f in state) {
      Vue.set(state, f, initialState[f]);
    }
  }
};
const getters = {
  masthead(state) {
    return state.masthead;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
