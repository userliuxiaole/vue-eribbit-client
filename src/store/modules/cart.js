export default {
  namespaced: true,
  state() {
    return {
      userName: "εεδΉ",
      userSex: "η·",
      userInfo: {
        userName: "111",
        userAge: "111",
        userSex: "nv ",
      },
    };
  },

  mutations: {
    updateName(state, payload) {
      state.userName = payload;
    },
  },

  actions: {
    getUserName({ commit }) {
      setTimeout(() => {
        commit("updateName", "1312321312");
      }, 200);
    },
  },
};
