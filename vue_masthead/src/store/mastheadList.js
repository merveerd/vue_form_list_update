import { GET_MASTHEADS, ADD_MASTHEAD } from "./actions.type";
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
  [GET_MASTHEADS]({ commit }, params) {
    commit(FETCH_START);
    if (state.mastheads.length == 0) {
      // return axios function
      //   .then(({ data }) => {
      commit(FETCH_END, [
        {
          name: "test1",
          gTag: "tag",
          notes: "djfkdjk"
        },
        {
          name: "test2",
          gTag: "tag2",
          notes: "djfkdjk"
        },
        {
          name: "test3",
          gTag: "tag3",
          notes: "djfkdjk"
        }
      ]);
      //   })
      //   .catch(error => {
      //     throw new Error(error);
      //   });
    }
  },

  async [ADD_MASTHEAD]({ commit }, params) {
    const { data } = { data: params }; // await axios function THEN go to back page;
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
  },
  [UPDATE_MASTHEAD_LIST](state, masthead) {
    let temp = [...state.mastheads];
    temp.push(masthead);
    state.mastheads = [...temp];
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
