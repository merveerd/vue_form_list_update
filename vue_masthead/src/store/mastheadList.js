import { FETCH_MASTHEADS, ADD_MASTHEAD } from "./actions.type";
import { FETCH_START, FETCH_END, UPDATE_MASTHEAD_LIST } from "./mutations.type";

const state = {
  mastheads: [],
  isLoading: true
};

const getters = {
  mastheads(state) {
    return state.mastheads;
  },
  isLoading(state) {
    return state.isLoading;
  }
};

const actions = {
  [FETCH_MASTHEADS]({ commit }, params) {
    commit(FETCH_START);

    // return axios function
    //   .then(({ data }) => {
    commit(FETCH_END, { MASTHEADS: "TEST" });
    //   })
    //   .catch(error => {
    //     throw new Error(error);
    //   });
  },

  async [ADD_MASTHEAD]({ commit }, params) {
    const { data } = { data: params }; // await axios function;
    commit(UPDATE_MASTHEAD_LIST, data);
  }
};

const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state, mastheads) {
    state.mastheads = mastheads;
    state.isLoading = false;
    console.log("fetch end", state);
  },
  [UPDATE_MASTHEAD_LIST](state, masthead) {
    let temp = [...state.mastheads];
    temp.push(masthead);
    state.mastheads = [...temp];
    console.log(state.mastheads);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
